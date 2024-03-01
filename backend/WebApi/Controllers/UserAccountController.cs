using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Veterinaria.Application.DTO;
using Veterinaria.Application.Authentication;
using Veterinaria.Domain.Repositories;
using Veterinaria.Application.CustomeException;
using Veterinaria.Domain.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAccountController : ControllerBase //TODO: posible nombre AuthController
    {
        private readonly IAuthenticationUserAccountService _authenticationService;
        private readonly IClientUserRepository _clientUserRepository;
        private readonly IMapper _mapper;
        public UserAccountController(IAuthenticationUserAccountService authenticationService, 
                                     IClientUserRepository clientUserRepository, IMapper mapper)
        {
            _authenticationService = authenticationService;
            _clientUserRepository = clientUserRepository;
            _mapper = mapper;
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserAccountRegisterDTO clientUserRegiserDTO)
        {
            var validEmail = await _authenticationService.IsSingleUser(clientUserRegiserDTO.Email);
            if (!validEmail)
            {
                throw new BadException("The email already exists");
            }
            var userAccount = await _authenticationService.Register(clientUserRegiserDTO);
            return NoContent();
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserAccountLoginDTO userAccountLoginDTO)
        {
            var loginResponse = await _authenticationService.Login(userAccountLoginDTO);
            // if (loginResponse.ClientUser is null || string.IsNullOrEmpty(loginResponse.Token))
            // {
            //     throw new UnauthorizedException("Nombre de usuario o contraseña incorrectos");
            // }
            return Ok(loginResponse);
        }
    }
}
