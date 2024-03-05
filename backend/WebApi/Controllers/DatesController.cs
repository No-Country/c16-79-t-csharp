using Microsoft.AspNetCore.Mvc;
using System.Net;
using Veterinaria.Application.Dtos.Wrappers;
using Veterinaria.Application.Dtos;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Services;
using Microsoft.AspNetCore.Authorization;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DatesController : Controller
    {
        private readonly IDateServise _DateService;

        public DatesController(IDateServise dateServise)
        {
            _DateService = dateServise;
        }


        [HttpGet]
        public async Task<ActionResult<ResponseSucceded<IEnumerable<DateDto>>>> GetAll()
        {
            List<Date> Dates = await _DateService.GetAllAsync();

            //TODO: Usar AutoMapper cuando este configurado?
            IEnumerable<DateDto> datesDtos =
                Dates.Select(c => new DateDto(c.Id, c.Time, c.ServiceId, c.PetId, c.StateDate, EnumExtension.GetEnumDescription(c.StateDate)));

            return Ok(
                new ResponseSucceded<IEnumerable<DateDto>>((int)HttpStatusCode.OK, datesDtos)
            );
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseSucceded<DateDto>>> GetById(int id)
        {
            Date Date = await _DateService.GetByIdAsync(id);

            //TODO: usar AutoMapper
            return Ok(new ResponseSucceded<DateDto>((int)HttpStatusCode.OK,
                new DateDto(Date.Id, Date.Time, Date.ServiceId, Date.PetId, Date.StateDate, EnumExtension.GetEnumDescription(Date.StateDate))));
            //ver service y pet  
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] DateCreateDto createDto)
        {
            Date date = await _DateService.CreateAsync(createDto.Time, createDto.ServiceId, createDto.PetId);
            return Created();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] DateDto updateDto)
        {
            await _DateService.UpdateAsync(id, updateDto.Time, updateDto.ServiceId, updateDto.PetId, updateDto.StateDate);
            return NoContent();
        }

        [Authorize(Roles = "Cliente")]
        [HttpGet("{id}/cancel")]
        public async Task<ActionResult<ResponseSucceded<DateDto>>> CancelDate(int id)
        {
            Date Date =  await _DateService.CancelDate(id); 
            return Ok(new ResponseSucceded<DateDto>((int)HttpStatusCode.OK,
                new DateDto(Date.Id, Date.Time, Date.ServiceId, Date.PetId, Date.StateDate, EnumExtension.GetEnumDescription(Date.StateDate))));
        }
    }
}
