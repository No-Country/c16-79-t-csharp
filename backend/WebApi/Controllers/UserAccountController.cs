using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Veterinaria.Application.Dtos;
using Veterinaria.Application.Authentication;
using Veterinaria.Domain.Repositories;
using Veterinaria.Application.CustomeException;
using Veterinaria.Domain.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAccountController : ControllerBase 
    {
        private readonly IAuthenticationUserAccountService _authenticationService;
        private readonly IMapper _mapper;
        public UserAccountController(IAuthenticationUserAccountService authenticationService, IMapper mapper)
        {
            _authenticationService = authenticationService;
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

            var clientUser = await _authenticationService.Register(clientUserRegiserDTO);
            return Created();
        }


        [HttpPost("login")]
        public async Task<ActionResult<UserAccountResponseLoginDTO>> Login([FromBody] UserAccountLoginDTO userAccountLoginDTO)
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
