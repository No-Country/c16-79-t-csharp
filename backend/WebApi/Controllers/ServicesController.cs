using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Veterinaria.Application.Dtos;
using Veterinaria.Application.Dtos.Wrappers;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Services;


namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ServicesController : Controller
    {
        private readonly IServiceService _ServiceService;

        public ServicesController(IServiceService ServiceService)
        {
            _ServiceService = ServiceService;
        }


        [HttpGet]
        public async Task<ActionResult<ResponseSucceded<IEnumerable<ServiceDto>>>> GetAll()
        {
            List<Service> services = await _ServiceService.GetAllAsync();
            IEnumerable<ServiceDto> servicesDtos =
               services.Select(c => new ServiceDto(c.Id, c.Type, c.Description, c.Price));

            return Ok(
                new ResponseSucceded<IEnumerable<ServiceDto>>((int)HttpStatusCode.OK, servicesDtos)
            );
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseSucceded<ServiceDto>>> GetById(int id)
        {
            Service services = await _ServiceService.GetByIdAsync(id);
            return Ok(new ResponseSucceded<ServiceDto>((int)HttpStatusCode.OK,
                new ServiceDto(services.Id,services.Type,services.Description,services.Price)));
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ServiceCreateDto createDto)
        {
            Service service = await _ServiceService.CreateAsync(createDto.Type,createDto.Description,createDto.Price);
            return Created();
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] ServiceCreateDto updateDto)
        {
            await _ServiceService.UpdateAsync(id, updateDto.Type,updateDto.Description,updateDto.Price);
            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _ServiceService.DeleteAsync(id);
            return NoContent();
        }
    }
}
