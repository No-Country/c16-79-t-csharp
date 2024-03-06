using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Veterinaria.Application.Dtos;
using Veterinaria.Application.Authentication;
using Veterinaria.Application.CustomeException;

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
            return Ok(loginResponse);
        }
    }
}
