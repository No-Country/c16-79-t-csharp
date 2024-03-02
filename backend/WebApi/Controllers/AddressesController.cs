using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Veterinaria.Application.CustomeException;
using System.Security.Claims;
using Veterinaria.Application.DTO;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Application.Dtos.Wrappers;
using System.Net;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressesController : ControllerBase
    {
        private readonly IAddressRepository _addressRepository;
        private readonly IClientUserRepository _clientUserRepository;
        private readonly IMapper _mapper;

        public AddressesController(IAddressRepository addressRepository,
                                IClientUserRepository clientUserRepository, IMapper mapper)
        {
            _addressRepository = addressRepository;
            _clientUserRepository = clientUserRepository;
            _mapper = mapper;
        }


        //[Authorize(Roles = "Admin")]
        // [HttpGet("GetAllWithData")]
        [HttpGet] // INFO: solo el Admin
        public async Task<ActionResult<ResponseSucceded<IEnumerable<AddressDTO>>>> GetAllWithData()
        {
            List<Address> addresses = await _addressRepository.GetAllWithData();
            var addressesDTO = _mapper.Map<IEnumerable<AddressDTO>>(addresses);
            return Ok(new ResponseSucceded<IEnumerable<AddressDTO>>((int)HttpStatusCode.OK, addressesDTO));
        }
        //TODO: Crear un endPoint (my-addresses)


        //[HttpGet("GetByIdWithData/{id}")]
        [Authorize(Roles = "Cliente")]
        [HttpGet("{id}")] 
        public async Task<ActionResult<ResponseSucceded<AddressDTO>>> GetByIdWithData(int id)
        {
            var address = await _addressRepository.GetByIdWithData(p => p.Id == id) ?? throw ResourceNotFoundException.NotFoundById<Address, int>(id);

            var addressDTO = _mapper.Map<AddressDTO>(address);
            return Ok(new ResponseSucceded<AddressDTO>((int)HttpStatusCode.OK, addressDTO));
        }


        [Authorize(Roles = "Cliente")]
        [HttpPost] // INFO: Parar Admin o Cliente
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
        [HttpPut("{id}")]// INFO: Parar Admin o Cliente
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


        //[Authorize(Roles = "Admin, Cliente")]
        [HttpDelete("{id}")]
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
    }
}
