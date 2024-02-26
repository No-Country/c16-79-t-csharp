using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Veterinaria.Application.DTO;
using Veterinaria.Application.Authentication;
using Veterinaria.Domain.Repositories;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAccountController : ControllerBase //TODO: posible nombre AuthController
    {
        private readonly IAuthenticationUserAccountService _authenticationService;
        private readonly IMapper _mapper;
        public UserAccountController(IAuthenticationUserAccountService authenticationService, IMapper mapper)
        {
            _authenticationService = authenticationService;
            _mapper = mapper;
        }


        [HttpPost("registro")] // FIXME: si el rol no existe, el usurio se registra igual
        public async Task<IActionResult> Register([FromBody] UserAccountRegisterDTO clientUserRegiserDTO)
        {
            var validEmail = await _authenticationService.IsSingleUser(clientUserRegiserDTO.Email);
            if (!validEmail)
            {
                return BadRequest("Usuario existente en la Base de Datos");
            }

            var clientUser = await _authenticationService.Register(clientUserRegiserDTO);
            if (clientUser is null)
            {
                return Conflict("Error: no se pudo registrar el usuario");
            }
            return Ok(clientUser);
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserAccountLoginDTO userAccountLoginDTO)
        {
            var loginResponse = await _authenticationService.Login(userAccountLoginDTO);
            if (loginResponse.ClientUser is null || string.IsNullOrEmpty(loginResponse.Token))
            {
                return Unauthorized("Nombre de usuario o contraseña incorrectos");
            }
            return Ok(loginResponse);
        }
    }
}
