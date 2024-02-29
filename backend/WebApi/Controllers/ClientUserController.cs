using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Security.Claims;
using Veterinaria.Application.DTO;
using Veterinaria.Application.Dtos.Wrappers;
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
        public async Task<ActionResult<ResponseSucceded<IEnumerable<ClientUserDTO>>>> GetAll()
        {
            var usuarios = await _clientUserRepository.GetAllClientUserWithData();
            var usuariosDTO = _mapper.Map<IEnumerable<ClientUserDTO>>(usuarios);
            return Ok(new ResponseSucceded<IEnumerable<ClientUserDTO>>((int)HttpStatusCode.OK, usuariosDTO));
        }

        // INFO: por momento nos concentramod en el clientuser
        // [Authorize(Roles = "Admin")]
        // [HttpGet("by-useraccount/{id}")]
        // public async Task<ActionResult<ClientUserDTO>> GetById(string id)
        // {
        //     var clientUser = await _clientUserRepository.GetClientUserByIdWithData(u => u.UserAccountId == id);
        //     if (clientUser is null)
        //     {
        //         return NotFound();
        //     }
        //     var clientUserDataDTO = _mapper.Map<ClientUserDTO>(clientUser);
        //     return Ok(clientUserDataDTO);
        // }

        [Authorize(Roles = "Cliente")]
        [HttpGet("my-clientuser")]
        public async Task<ActionResult<ResponseSucceded<ClientUserDTO>>> GetClientUser()
        {
            ClaimsPrincipal claims = this.User;
            var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;
            var clientUser = await _clientUserRepository.GetClientUserByIdWithData(u => u.UserAccountId == idUser);
            if (clientUser is null)
            {
                return NotFound();
            }
            var clientUserDataDTO = _mapper.Map<ClientUserDTO>(clientUser);
            return Ok(new ResponseSucceded<ClientUserDTO>((int)HttpStatusCode.OK, clientUserDataDTO));
        }


        [Authorize(Roles = "Admin, Cliente")]
        [HttpPost]
        public async Task<ActionResult<ResponseSucceded<ClientUserDTO>>> AddPersonalData([FromBody] ClientUserDataUpdateDTO clientUserDataAddDTO)
        {
            // TODO: Controllar si el usuario ya existe
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
            return Ok(new ResponseSucceded<ClientUserDTO>((int)HttpStatusCode.OK, clientUserDTO));
        }

        [Authorize(Roles = "Admin, Cliente")]
        [HttpPatch("update")]
        public async Task<ActionResult<ResponseSucceded<ClientUserDTO>>> PersonalDataUpdate([FromBody] ClientUserDataUpdateDTO clientUserDataUpdateDTO)
        {
            ClaimsPrincipal claims = this.User;
            var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;
            var clientUser = await _clientUserRepository.GetClientUserById(u => u.UserAccountId == idUser);
            _mapper.Map(clientUserDataUpdateDTO, clientUser);
            var clientUserUpdated = await _clientUserRepository.UpdateAsync(clientUser);
            var clientUserDTO = _mapper.Map<ClientUserDTO>(clientUserUpdated);
            return Ok(new ResponseSucceded<ClientUserDTO>((int)HttpStatusCode.OK, clientUserDTO));
        }

    }
}
