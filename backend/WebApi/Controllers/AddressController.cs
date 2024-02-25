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
    public class AddressController : ControllerBase
    {
        private readonly IAddressRepository _addressRepository;
        private readonly IMapper _mapper;

        public AddressController(IAddressRepository addressRepository, IMapper mapper)
        {
            _addressRepository = addressRepository;
            _mapper = mapper;
        }


        //[Authorize(Roles = "Admin")]
        [HttpGet("GetAllWithData")]
        public ActionResult<IEnumerable<AddressDTO>> GetAllWithData()
        {
            var addresses = _addressRepository.GetAllWithData();
            if (addresses is null)
            {
                return NotFound();
            }
            var addressesDTO = _mapper.Map<IEnumerable<AddressDTO>>(addresses);
            return Ok(addressesDTO);
        }


        //[Authorize(Roles = "Admin, Cliente")]
        [HttpGet("GetByIdWithData/{id}")]
        public ActionResult<AddressDTO> GetByIdWithData(int id)
        {
            var address = _addressRepository.GetByIdWithData(p => p.Id == id);
            if (address is null)
            {
                return NotFound();
            }
            var addressDTO = _mapper.Map<AddressDTO>(address);
            return Ok(addressDTO);
        }


        //[Authorize(Roles = "Cliente")]
        [HttpPost]
        public async Task<ActionResult<AddressDTO>> Insert([FromBody] AddressCreationDTO addressCreationDTO)
        {
            var address = _mapper.Map<Address>(addressCreationDTO);
            await _addressRepository.AddAsync(address);
            var addressDTO = _mapper.Map<AddressDTO>(address);
            return Ok(addressDTO);
        }


        //[Authorize(Roles = "Cliente")]
        [HttpPut("{id}")]
        public async Task<ActionResult<AddressDTO>> Actualizar([FromRoute] int id, [FromBody] AddressCreationDTO addressCreationDTO)
        {
            var address = await _addressRepository.FindByIdAsync(id);
            if (address is null)
            {
                return NotFound();
            }
            _mapper.Map(addressCreationDTO, address);
            var result = await _addressRepository.UpdateAsync(address);
            var addressDTO = _mapper.Map<AddressDTO>(result);
            return Ok(addressDTO);
        }


        //[Authorize(Roles = "Admin, Cliente")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Eliminar([FromBody] int id)
        {
            var address = await _addressRepository.FindByIdAsync(id);
            if (address is null)
            {
                return NotFound();
            }
            await _addressRepository.DeleteAsync(address);
            //var result = await _addressRepository.DeleteAsync(address);
            //if (!result)
            //{
            //    return BadRequest();
            //}
            return NoContent();
        }
    }
}
