using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Veterinaria.Application.Authentication;
using Veterinaria.Application.CustomeException;
using Veterinaria.Application.DTO;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Authentication;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Authentication
{
    public class AuthenticationUserAccountService : IAuthenticationUserAccountService //TODO:
    {
        private readonly VeterinariaDbContext _context;
        private readonly UserManager<ApplicationUserAccount> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IMapper _mapper;
        private readonly string _secretKey;
        public AuthenticationUserAccountService(VeterinariaDbContext context,
                                    IConfiguration config,
                                    UserManager<ApplicationUserAccount> userManager,
                                    RoleManager<IdentityRole> roleManager,
                                    IMapper mapper)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _secretKey = config["Settings:SecretKey"] ?? throw new Exception("Not found Secret Key");
        }

        public async Task<bool> IsSingleUser(string email)
        {
            var validation = await _context.ApplicationUserAccounts.FirstOrDefaultAsync(u => u.Email == email);
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
            var newClientUser = new ApplicationUserAccount()
            {
                Email = clientUserRegisterDTO.Email,
                NormalizedEmail = clientUserRegisterDTO.Email.ToUpper(),
                UserName = clientUserRegisterDTO.Email
            };
            var createResult = await _userManager.CreateAsync(newClientUser, clientUserRegisterDTO.Password);
            if (!createResult.Succeeded)
            {
                var errors = createResult.Errors;
                throw new BadException("Could not create account", errors.Select(e => e.Description).ToList());
            }

            var roleExist = await _roleManager.RoleExistsAsync("Admin");
            if (!roleExist)
            {
                await _roleManager.CreateAsync(new IdentityRole("Admin"));
                await _roleManager.CreateAsync(new IdentityRole("Cliente"));
            }
            var role = clientUserRegisterDTO.Role;
            await _userManager.AddToRoleAsync(newClientUser, role);
            var clientReturn = await _context.ApplicationUserAccounts.FirstOrDefaultAsync(u => u.Email == clientUserRegisterDTO.Email);
            return _mapper.Map<UserAccountResponseRegisterDTO>(clientReturn);

        }

        public async Task<UserAccountResponseLoginDTO> Login(UserAccountLoginDTO userAccountLoginDTO)
        {
            var clientUserFound = await _context.ApplicationUserAccounts.FirstOrDefaultAsync(
                                            u => u.NormalizedEmail == userAccountLoginDTO.Email.ToUpper());
            if (clientUserFound is null )
            {
                throw new UnauthorizedException("Email or password incorrect");
            }

            bool isValid = await _userManager.CheckPasswordAsync(clientUserFound, userAccountLoginDTO.Password);
            if (isValid is false)
            {
                throw new UnauthorizedException("Email or password incorrect");
            }

            var roles = await _userManager.GetRolesAsync(clientUserFound);
            var roleUser = roles.FirstOrDefault() ?? throw new ConflictException("Not found the user role ");


            // var tokenHandler = new JwtSecurityTokenHandler();
            // var key = Encoding.ASCII.GetBytes(_secretKey);

            // var tokenInformation = new SecurityTokenDescriptor
            // {
            //     //Se deben fijar el mismo valor que para ValidAudience y ValidIssuer puestos en program.cs
            //     //Issuer = ,
            //     //Audience = ,
            //     Subject = new ClaimsIdentity(new Claim[]
            //     {
            //         new Claim(ClaimTypes.NameIdentifier, clientUserFound.Id.ToString()),
            //         new Claim(ClaimTypes.Email, clientUserFound.Email.ToString()),
            //         new Claim(ClaimTypes.Role, roleUser)
            //     }),
            //     Expires = DateTime.UtcNow.AddDays(1),
            //     SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            // };

            // var tokenCreated = tokenHandler.CreateToken(tokenInformation);

            // string token = tokenHandler.WriteToken(tokenCreated);
            string token = JwtGenerator.GenerateToken(clientUserFound, roleUser, _secretKey);

            var clientUserResponseLoginDTO = new UserAccountResponseLoginDTO()
            {
                ClientUser = _mapper.Map<ClientUserDTO>(clientUserFound),
                Token = token
            };
            return clientUserResponseLoginDTO;
        }


        //public string TokenGenerator(IList<string> roles, ApplicationUserAccount userAccount)
        //{
        //    var tokenHandler = new JwtSecurityTokenHandler();
        //    var key = Encoding.ASCII.GetBytes(_secretKey);

        //    var tokenInformation = new SecurityTokenDescriptor
        //    {
        //        //Se deben fijar el mismo valor que para ValidAudience y ValidIssuer puestos en program.cs
        //        //Issuer = ,
        //        //Audience = ,
        //        Subject = new ClaimsIdentity(new Claim[]
        //        {
        //            new Claim(ClaimTypes.NameIdentifier, userAccount.Id.ToString()),
        //            new Claim(ClaimTypes.Email, userAccount.Email.ToString()),
        //            new Claim(ClaimTypes.Role, roles.FirstOrDefault())
        //        }),
        //        Expires = DateTime.UtcNow.AddDays(1),
        //        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        //    };

        //    var tokenCreated = tokenHandler.CreateToken(tokenInformation);
        //    var token = tokenHandler.WriteToken(tokenCreated);
        //    return token;
        //}
    }
}
