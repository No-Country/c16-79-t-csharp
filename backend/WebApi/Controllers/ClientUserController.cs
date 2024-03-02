﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Security.Claims;
using Veterinaria.Application.CustomeException;
using Veterinaria.Application.DTO;
using Veterinaria.Application.Dtos.Wrappers;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientUsersController : ControllerBase
    {
        private readonly IClientUserRepository _clientUserRepository;
        private readonly IClientUserService _clientUserService;
        private readonly IPetService _petService;
        private readonly IPetRepository _petRepository;
        private readonly IAddressRepository _addressRepository;
        private readonly IMapper _mapper;
        public ClientUsersController(IClientUserRepository clientUserRepository, IMapper mapper, IClientUserService clientUserService, IPetRepository petRepository, IPetService petService, IAddressRepository addressRepository)
        {
            _clientUserRepository = clientUserRepository;
            _mapper = mapper;
            _clientUserService = clientUserService;
            _petRepository = petRepository;
            _petService = petService;
            _addressRepository = addressRepository;
        }

        // api/clientusers
        #region ClientUsers

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
        [HttpGet("me")]
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


        // [Authorize(Roles = "Admin, Cliente")]
        // [HttpPost("me")]
        // public async Task<ActionResult<ResponseSucceded<ClientUserDTO>>> AddPersonalData([FromBody] ClientUserDataUpdateDTO clientUserDataAddDTO)
        // {
        //     ClaimsPrincipal claims = this.User;
        //     var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;
        //     var clientUser = new ClientUser
        //     {
        //         Name = clientUserDataAddDTO.Name,
        //         LastName = clientUserDataAddDTO.LastName,
        //         UserName = clientUserDataAddDTO.UserName,
        //         PhoneNumber = clientUserDataAddDTO.PhoneNumber,
        //         UserAccountId = idUser
        //     };
        //     var clientUserUpdated = await _clientUserRepository.AddAsync(clientUser);
        //     var clientUserDTO = _mapper.Map<ClientUserDTO>(clientUserUpdated);
        //     return Ok(new ResponseSucceded<ClientUserDTO>((int)HttpStatusCode.OK, clientUserDTO));
        // }

        [Authorize(Roles = "Admin, Cliente")]
        [HttpPut("me")]
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

        #endregion


        // *INFO: uso de endpoints relacionados a UserClient

        // api/clientusers/me/addresses
        #region Addresses

        [Authorize(Roles = "Cliente")]
        [HttpGet("me/addresses")]
        public async Task<ActionResult<ResponseSucceded<IEnumerable<AddressDTO>>>> GetAllWithData()
        {
            ClaimsPrincipal claims = this.User;
            var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;
            var clientUser = await _clientUserRepository.GetClientUserById(u => u.UserAccountId == idUser);

            List<Address> addresses = await _addressRepository.FindAllByUser(clientUser.Id);
            var addressesDTO = _mapper.Map<IEnumerable<AddressDTO>>(addresses);
            return Ok(new ResponseSucceded<IEnumerable<AddressDTO>>((int)HttpStatusCode.OK, addressesDTO));
        }

        [Authorize(Roles = "Cliente")]
        [HttpGet("me/addresses/{id}")]
        public async Task<ActionResult<ResponseSucceded<AddressDTO>>> GetByIdWithData(int id)
        {
            ClaimsPrincipal claims = this.User;
            var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;

            var address = await _addressRepository.GetByIdWithData(p => p.Id == id) ?? throw ResourceNotFoundException.NotFoundById<Address, int>(id);

            var addressDTO = _mapper.Map<AddressDTO>(address);
            return Ok(new ResponseSucceded<AddressDTO>((int)HttpStatusCode.OK, addressDTO));
        }

        [Authorize(Roles = "Cliente")]
        [HttpPost("me/addresses")]
        public async Task<ActionResult<ResponseSucceded<AddressDTO>>> InsertAddresses([FromBody] AddressCreationDTO addressCreationDTO)
        {
            ClaimsPrincipal claims = this.User;
            var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;
            var clientUser = await _clientUserRepository.GetClientUserById(u => u.UserAccountId == idUser);

            var address = new Address
            {
                City = addressCreationDTO.City,
                Province = addressCreationDTO.Province,
                Neighborhood = addressCreationDTO.Neighborhood,
                Street = addressCreationDTO.Street,
                Number = addressCreationDTO.Number,
                ClientUserId = clientUser.Id
            };
            await _addressRepository.AddAsync(address);
            var addressDTO = _mapper.Map<AddressDTO>(address);
            return Ok(new ResponseSucceded<AddressDTO>((int)HttpStatusCode.OK, addressDTO));
        }

        [Authorize(Roles = "Cliente")]
        [HttpPut("me/addresses/{id}")]
        public async Task<ActionResult<ResponseSucceded<AddressDTO>>> Actualizar([FromRoute] int id, [FromBody] AddressCreationDTO addressCreationDTO)
        {
            var address = await _addressRepository.FindByIdAsync(id);
            if (address is null)
            {
                throw ResourceNotFoundException.NotFoundById<Address, int>(id);
            }
            _mapper.Map(addressCreationDTO, address);
            var result = await _addressRepository.UpdateAsync(address);
            var addressDTO = _mapper.Map<AddressDTO>(result);
            return Ok(new ResponseSucceded<AddressDTO>((int)HttpStatusCode.OK, addressDTO));
        }

        [Authorize(Roles = "Cliente")]
        [HttpDelete("me/addresses/{id}")]
        public async Task<ActionResult> Eliminar([FromRoute] int id)
        {
            var address = await _addressRepository.FindByIdAsync(id);
            if (address is null)
            {
                throw ResourceNotFoundException.NotFoundById<Address, int>(id);
            }
            await _addressRepository.DeleteAsync(address);

            return NoContent();
        }

        #endregion

        // api/clientusers/me/pets
        #region Pets 

        [Authorize(Roles = "Cliente")]
        [HttpGet("me/pets")]
        public async Task<ActionResult<ResponseSucceded<IEnumerable<PetDTO>>>> GetAllByUser()
        {
            ClaimsPrincipal claims = this.User;
            string idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value ?? "";
            List<Pet> pets = await _petService.GetAllByUserAccount(idUser);

            List<PetDTO> petDtos = _mapper.Map<List<PetDTO>>(pets);

            return Ok(new ResponseSucceded<List<PetDTO>>((int)HttpStatusCode.OK, petDtos));
        }

        [Authorize(Roles = "Cliente")]
        [HttpGet("me/pets/{id}")]
        public async Task<ActionResult<ResponseSucceded<PetDTO>>> GetByIdAndUser(int id)
        {
            ClaimsPrincipal claims = this.User;
            string idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value ?? "";
            var pet = await _petRepository.GetByIdWithData(p => p.Id == id);
            if (pet is null)
            {
                throw ResourceNotFoundException.NotFoundById<Pet, int>(id);
            }
            var petDTO = _mapper.Map<PetDTO>(pet);
            return Ok(petDTO);
        }

        [Authorize(Roles = "Cliente")]
        [HttpPut("me/pets/{id}")]
        public async Task<ActionResult<ResponseSucceded<PetDTO>>> UpdateById([FromRoute] int id, [FromBody] PetCreationDTO petCreationDTO)
        {
            var pet = await _petRepository.FindByIdAsync(id);
            if (pet is null)
            {
                throw ResourceNotFoundException.NotFoundById<Pet, int>(id);
            }
            _mapper.Map(petCreationDTO, pet);
            var result = await _petRepository.UpdateAsync(pet);
            var petDTO = _mapper.Map<PetDTO>(result);
            return Ok(new ResponseSucceded<PetDTO>((int)HttpStatusCode.OK,petDTO));
        }

        [Authorize(Roles = "Cliente")]
        [HttpDelete("me/pets/{id}")]
        public async Task<ActionResult> DeleteById([FromRoute] int id)
        {
            var pet = await _petRepository.FindByIdAsync(id);
            if (pet is null)
            {
                throw ResourceNotFoundException.NotFoundById<Pet, int>(id);
            }
            await _petRepository.DeleteAsync(pet);
            return NoContent();
        }

        [Authorize(Roles = "Cliente")]
        [HttpPost("me/pets")]
        public async Task<ActionResult<PetDTO>> CreatePet([FromBody] PetCreationDTO petCreationDTO)
        {
            ClaimsPrincipal claims = this.User;
            var idUser = claims.FindFirst(u => u.Type == ClaimTypes.NameIdentifier)?.Value;
            var clientUser = await _clientUserRepository.GetClientUserById(u => u.UserAccountId == idUser);
            if (clientUser is not ClientUser)
            {
                throw new BadException("Debe registrar la informacion del usuario.");
            }
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

        #endregion

        // api/clientusers/me/pets/medicalhistories
        #region MedicalHistories

        #endregion

        // api/clientusers/me/pets/dates
        #region Dates

        #endregion
    }
}
