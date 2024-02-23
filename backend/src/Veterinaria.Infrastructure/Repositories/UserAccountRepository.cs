using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Veterinaria.Application.DTO;
using Veterinaria.Domain.Models;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Repositories
{
    public class UserAccountRepository : IUserAccountRepository
    {
        private readonly VeterinariaDbContext _context;
        private readonly UserManager<ClientUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IMapper _mapper;
        private readonly string _secretKey;
        public UserAccountRepository(VeterinariaDbContext context,
                                    IConfiguration config,
                                    UserManager<ClientUser> userManager,
                                    RoleManager<IdentityRole> roleManager,
                                    IMapper mapper) : base(context)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _secretKey = config.GetValue<string>("Settings:SecretKey");
        }

        public async Task<bool> IsSingleUser(string email)
        {
            var validation = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (validation is null)
            {
                return true;
            }
            return false;
        }


        //Tengo duda sobre si iniciar los atributos del usuario cliente como el nombre, apellido, telefono en un valor, para que no sea
        //nulo y no tener problema con los claims.
        public async Task<UserAccountResponseRegisterDTO> Register(UserAccountRegisterDTO clientUserRegisterDTO)
        {
            var newClientUser = new ClientUser()
            {
                Email = clientUserRegisterDTO.Email,
                NormalizedEmail = clientUserRegisterDTO.Email.ToUpper(),
                UserName = clientUserRegisterDTO.Email
            };
            var createResult = await _userManager.CreateAsync(newClientUser, clientUserRegisterDTO.Password);
            if (createResult.Succeeded)
            {
                var roleExist = await _roleManager.RoleExistsAsync("Admin");
                if (!roleExist)
                {
                    await _roleManager.CreateAsync(new IdentityRole("Admin"));
                    await _roleManager.CreateAsync(new IdentityRole("Cliente"));
                }
                var role = clientUserRegisterDTO.Role;
                await _userManager.AddToRoleAsync(newClientUser, role);
                var clientReturn = await _context.Users.FirstOrDefaultAsync(u => u.Email == clientUserRegisterDTO.Email);
                return _mapper.Map<UserAccountResponseRegisterDTO>(clientReturn);
            }
            return null;
        }

        public async Task<UserAccountResponseLoginDTO> Login(UserAccountLoginDTO clientUserLoginDTO)
        {
            var clientUserFound = await _context.Users.FirstOrDefaultAsync(
                                            u => u.NormalizedEmail == clientUserLoginDTO.Email.ToUpper());
            bool isValid = await _userManager.CheckPasswordAsync(clientUserFound, clientUserLoginDTO.Password);
            if (clientUserFound is null || isValid is false)
            {
                return new UserAccountResponseLoginDTO
                {
                    ClientUser = null,
                    Token = ""
                };
            }

            var roles = await _userManager.GetRolesAsync(clientUserFound);
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_secretKey);

            var tokenInformation = new SecurityTokenDescriptor
            {
                //Se deben fijar el mismo valor que para ValidAudience y ValidIssuer puestos en program.cs
                //Issuer = ,
                //Audience = ,
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, clientUserFound.Id.ToString()),
                    //new Claim(ClaimTypes.Name, clientUserFound.UserName.ToString()),
                    //new Claim(ClaimTypes.GivenName, clientUserFound.Name.ToString()),
                    //new Claim(ClaimTypes.Surname, clientUserFound.LastName.ToString()),
                    new Claim(ClaimTypes.Email, clientUserFound.Email.ToString()),
                    new Claim(ClaimTypes.Role, roles.FirstOrDefault())
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenInformation);
            var clientUserResponseLoginDTO = new UserAccountResponseLoginDTO()
            {
                ClientUser = _mapper.Map<ClientUserDTO>(clientUserFound),
                Token = tokenHandler.WriteToken(token)
            };
            return clientUserResponseLoginDTO;
        }
    }
}
