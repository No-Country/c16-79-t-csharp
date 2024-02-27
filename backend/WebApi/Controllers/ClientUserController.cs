using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Veterinaria.Application.DTO;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientUsersController : ControllerBase
    {
        private readonly IClientUserRepository _clientUserRepository;
        private readonly IMapper _mapper;
        public ClientUsersController(IClientUserRepository clientUserRepository, IMapper mapper)
        {
            _clientUserRepository = clientUserRepository;
            _mapper = mapper;
        }


        [Authorize(Roles = "Admin")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientUserDTO>>> GetAll()
        {
            var usuarios = await _clientUserRepository.GetAllClientUserWithData();
            var usuariosDTO = _mapper.Map<IEnumerable<ClientUserDTO>>(usuarios);
            return Ok(usuariosDTO);
        }


        [Authorize(Roles = "Admin")]
        [HttpGet("by-useraccount/{id}")] // TODO: construir un endpoint para acceder con el id en el Token
        public async Task<ActionResult<ClientUserDTO>> GetById(string id)
        {
            var clientUser = await _clientUserRepository.GetClientUserByIdWithData(u => u.UserAccountId == id);
            if (clientUser is null)
            {
                return NotFound();
            }
            var clientUserDataDTO = _mapper.Map<ClientUserDTO>(clientUser);
            return Ok(clientUserDataDTO);
        }


        [Authorize(Roles = "Admin, Cliente")]
        [HttpPost]
        public async Task<ActionResult<ClientUserDTO>> AddPersonalData([FromBody] ClientUserDataUpdateDTO clientUserDataAddDTO)
        {
            ClaimsPrincipal claims = this.User;
            var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;
            var clientUser = new ClientUser
            {
                Name = clientUserDataAddDTO.Name,
                LastName = clientUserDataAddDTO.LastName,
                UserName = clientUserDataAddDTO.UserName,
                PhoneNumber = clientUserDataAddDTO.PhoneNumber,
                UserAccountId = idUser
            };
            var clientUserUpdated = await _clientUserRepository.AddAsync(clientUser);
            var clientUserDTO = _mapper.Map<ClientUserDTO>(clientUserUpdated);
            return Ok(clientUserDTO);
        }

        [Authorize(Roles = "Admin, Cliente")]
        [HttpPatch("update")]
        public async Task<ActionResult<ClientUserDTO>> PersonalDataUpdate([FromBody] ClientUserDataUpdateDTO clientUserDataUpdateDTO)
        {
            ClaimsPrincipal claims = this.User;
            var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;
            var clientUser = await _clientUserRepository.GetClientUserById(u => u.UserAccountId == idUser);
            _mapper.Map(clientUserDataUpdateDTO, clientUser);
            var clientUserUpdated = await _clientUserRepository.UpdateAsync(clientUser);
            var clientUserDTO = _mapper.Map<ClientUserDTO>(clientUserUpdated);
            return Ok(clientUserDTO);
        }

    }
}
