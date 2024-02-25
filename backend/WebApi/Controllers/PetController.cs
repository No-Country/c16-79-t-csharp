using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Veterinaria.Application.DTO;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetController : ControllerBase
    {
        private readonly IPetRepository _petRepository;
        private readonly IMapper _mapper;

        public PetController(IPetRepository petRepository, IMapper mapper)
        {
            _petRepository = petRepository;
            _mapper = mapper;
        }


        //[Authorize(Roles = "Admin")]
        [HttpGet("GetAllWithData")]
        public ActionResult<IEnumerable<PetDTO>> GetAllWithData()
        {
            var pets = _petRepository.GetAllWithData();
            if (pets is null)
            {
                return NotFound();
            }
            var petsDTO = _mapper.Map<IEnumerable<PetDTO>>(pets);
            return Ok(petsDTO);
        }


        //[Authorize(Roles = "Admin, Cliente")]
        [HttpGet("GetByIdWithData/{id}")]
        public async Task<ActionResult<PetDTO>> GetByIdWithData(int id)
        {
            var pet = await _petRepository.GetByIdWithData(p => p.Id == id);
            if (pet is null)
            {
                return NotFound();
            }
            var petDTO = _mapper.Map<PetDTO>(pet);
            return Ok(petDTO);
        }


        //[Authorize(Roles = "Cliente")]
        [HttpPost]
        public async Task<ActionResult<PetDTO>> Insert([FromBody] PetCreationDTO petCreationDTO)
        {
            var pet = _mapper.Map<Pet>(petCreationDTO);
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
                return NotFound();
            }
            _mapper.Map(petCreationDTO, pet);
            var result = await _petRepository.UpdateAsync(pet);
            var petDTO = _mapper.Map<PetDTO>(result);
            return Ok(petDTO);
        }


        //[Authorize(Roles = "Admin, Cliente")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Eliminar([FromBody] int id)
        {
            var pet = await _petRepository.FindByIdAsync(id);
            if (pet is null)
            {
                return NotFound();
            }
            await _petRepository.DeleteAsync(pet);
            //var result = await _petRepository.DeleteAsync(pet);
            //if (!result)
            //{
            //    return BadRequest();
            //}
            return NoContent();
        }
    }
}
