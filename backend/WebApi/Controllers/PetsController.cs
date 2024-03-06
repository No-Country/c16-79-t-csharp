﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Veterinaria.Application.CustomeException;
using Veterinaria.Application.Dtos;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Application.Dtos.Wrappers;
using Veterinaria.Domain.Services;
using System.Net;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetsController : ControllerBase
    {
        private readonly IPetRepository _petRepository;
        private readonly IClientUserRepository _clientUserRepository;
        private readonly IPetService _petService;
        private readonly IMapper _mapper;

        public PetsController(IPetRepository petRepository, IClientUserRepository clientUserRepository, IMapper mapper, IPetService petService)
        {
            _petRepository = petRepository;
            _clientUserRepository = clientUserRepository;
            _mapper = mapper;
            _petService = petService;
        }


        [Authorize(Roles = "Admin")]
        [HttpGet]
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


        [Authorize(Roles = "Admin, Cliente")]
        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseSucceded<PetDTO>>> GetByIdWithData(int id)
        {
            var pet = await _petRepository.GetByIdWithData(p => p.Id == id);
            if (pet is null)
            {
                throw ResourceNotFoundException.NotFoundById<Pet, int>(id);
            }
            var petDTO = _mapper.Map<PetDTO>(pet);
            return Ok(new ResponseSucceded<PetDTO>((int)HttpStatusCode.OK, petDTO));
        }


        #region EndpointsViejos

        //[Authorize(Roles = "Admin, Cliente")]
        //[HttpPost]
        //public async Task<ActionResult<PetDTO>> Insert([FromBody] PetCreationDTO petCreationDTO)
        //{
        //    ClaimsPrincipal claims = this.User;
        //    var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;
        //    var clientUser = await _clientUserRepository.GetClientUserById(u => u.UserAccountId == idUser);
        //    // TODO: controlar cuando el clientUser aun no se ha creado
        //    var pet = new Pet
        //    {
        //        Name = petCreationDTO.Name,
        //        Type = petCreationDTO.Type,
        //        Race = petCreationDTO.Race,
        //        Birthday = DateOnly.ParseExact(petCreationDTO.Birthday, "dd/MM/yyyy"),
        //        Weight = petCreationDTO.Weight,
        //        Photo = petCreationDTO.Photo,
        //        ClientUserId = clientUser.Id
        //    };
        //    await _petRepository.AddAsync(pet);
        //    var petDTO = _mapper.Map<PetDTO>(pet);
        //    return Ok(petDTO);
        //}


        //[Authorize(Roles = "Cliente")]
        //[HttpPut("{id}")]
        //public async Task<ActionResult<PetDTO>> Actualizar([FromRoute] int id, [FromBody] PetCreationDTO petCreationDTO)
        //{
        //    var pet = await _petRepository.FindByIdAsync(id);
        //    if (pet is null)
        //    {
        //        throw ResourceNotFoundException.NotFoundById<Pet, int>(id);
        //    }
        //    _mapper.Map(petCreationDTO, pet);
        //    var result = await _petRepository.UpdateAsync(pet);
        //    var petDTO = _mapper.Map<PetDTO>(result);
        //    return Ok(petDTO);
        //}


        //[Authorize(Roles = "Admin, Cliente")]
        //[HttpDelete("{id}")]
        //public async Task<ActionResult> Eliminar([FromRoute] int id)
        //{
        //    var pet = await _petRepository.FindByIdAsync(id);
        //    if (pet is null)
        //    {
        //        throw ResourceNotFoundException.NotFoundById<Pet, int>(id);
        //    }
        //    await _petRepository.DeleteAsync(pet);
        //    return NoContent();
        //}

        #endregion
    }

}
