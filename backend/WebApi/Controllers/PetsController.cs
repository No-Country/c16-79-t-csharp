using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Veterinaria.Application.CustomeException;
using System.Security.Claims;
using Veterinaria.Application.DTO;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Repositories;
using System.Net;
using Veterinaria.Application.Dtos.Wrappers;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetsController : ControllerBase
    {
        private readonly IPetRepository _petRepository;
        private readonly IClientUserRepository _clientUserRepository;
        private readonly IMapper _mapper;

        public PetsController(IPetRepository petRepository, IClientUserRepository clientUserRepository, IMapper mapper)
        {
            _petRepository = petRepository;
            _clientUserRepository = clientUserRepository;
            _mapper = mapper;
        }


        //[Authorize(Roles = "Admin")]
        // [HttpGet("GetAllWithData")]
        [HttpGet]// INFO: solo Admin
        public async Task<ActionResult<IEnumerable<PetDTO>>> GetAllWithData()
        {
            var pets = await _petRepository.GetAllWithData();
            if (pets is null)
            {
                return NotFound();
            }
            var petsDTO = _mapper.Map<IEnumerable<PetDTO>>(pets);
            return Ok(new ResponseSucceded<IEnumerable<PetDTO>>((int)HttpStatusCode.OK, petsDTO));
        }
        // TODO: construir GET api/pets/my-pets , solo los pets de un usuario


        //[Authorize(Roles = "Admin, Cliente")]
        [HttpGet("{id}")] // 
        public async Task<ActionResult<PetDTO>> GetByIdWithData(int id)
        {
            var pet = await _petRepository.GetByIdWithData(p => p.Id == id);
            if (pet is null)
            {
                throw ResourceNotFoundException.NotFoundById<Pet, int>(id);
            }
            var petDTO = _mapper.Map<PetDTO>(pet);
            return Ok(new ResponseSucceded<PetDTO>((int)HttpStatusCode.OK, petDTO));
        }


        //[Authorize(Roles = "Cliente")]
        [HttpPost]
        public async Task<ActionResult<PetDTO>> Insert([FromBody] PetCreationDTO petCreationDTO)
        {
            ClaimsPrincipal claims = this.User;
            var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;
            var clientUser = await _clientUserRepository.GetClientUserById(u => u.UserAccountId == idUser);
            // TODO: controlar cuando el clientUser aun no se ha creado
            var pet = new Pet
            {
                Name = petCreationDTO.Name,
                Type = petCreationDTO.Type,
                Race = petCreationDTO.Race,
                Birthday = DateOnly.ParseExact(petCreationDTO.Birthday, "dd/MM/yyyy"),
                Weight = petCreationDTO.Weight,
                Photo = petCreationDTO.Photo,
                ClientUserId = clientUser.Id
            };
            await _petRepository.AddAsync(pet);
            var petDTO = _mapper.Map<PetDTO>(pet);
            return Ok(petDTO);
        }


        //[Authorize(Roles = "Cliente")]
        [HttpPut("{id}")]
        public async Task<ActionResult<PetDTO>> Actualizar([FromRoute] int id, [FromBody] PetCreationDTO petCreationDTO)
        {
            var pet = await _petRepository.FindByIdAsync(id);
            if (pet is null)
            {
                throw ResourceNotFoundException.NotFoundById<Pet, int>(id);
            }
            _mapper.Map(petCreationDTO, pet);
            var result = await _petRepository.UpdateAsync(pet);
            var petDTO = _mapper.Map<PetDTO>(result);
            return Ok(petDTO);
        }


        //[Authorize(Roles = "Admin, Cliente")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Eliminar([FromRoute] int id)
        {
            var pet = await _petRepository.FindByIdAsync(id);
            if (pet is null)
            {
                throw ResourceNotFoundException.NotFoundById<Pet, int>(id);
            }
            await _petRepository.DeleteAsync(pet);
            return NoContent();
        }
    }
}
