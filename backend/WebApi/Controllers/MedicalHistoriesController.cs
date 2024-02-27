using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using Veterinaria.Application.Dtos.Wrappers;
using Veterinaria.Application.Dtos;
using Veterinaria.Domain.Services;
using Veterinaria.Domain.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicalHistoriesController : Controller
    {
        private readonly IMedicalHistoryService _MHService;

        public MedicalHistoriesController(IMedicalHistoryService mHServise)
        {
            _MHService = mHServise;
        }


        [HttpGet]
        public async Task<ActionResult<ResponseSucceded<IEnumerable<DateDto>>>> GetAll()
        {
            List<MedicalHistory> Dates = await _MHService.GetAllAsync();

            //TODO: Usar AutoMapper cuando este configurado?
            IEnumerable<MedicalHistoriesDto> datesDtos =
               Dates.Select(
                    c => new MedicalHistoriesDto(c.Id,c.Diagnostic,c.Medic,c.Time,c.PetId,c.Pet));
            //REVER: PET
            return Ok(
                new ResponseSucceded<IEnumerable<MedicalHistory>>((int)HttpStatusCode.OK, (IEnumerable<MedicalHistory>)datesDtos)
            );
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseSucceded<DateDto>>> GetById(int id)
        {
            MedicalHistory mHistory = await _MHService.GetByIdAsync(id);

            //TODO: usar AutoMapper
            return Ok(new ResponseSucceded<MedicalHistoriesDto>((int)HttpStatusCode.OK,
                new MedicalHistoriesDto(mHistory.Id, mHistory.Diagnostic,mHistory.Medic,mHistory.Time,mHistory.PetId,mHistory.Pet)));
            //ver service y pet  
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] MedicalHistoriesCreatedDto createDto)
        {
            MedicalHistory medicalHistory = await _MHService.CreateAsync(createDto.Diagnostic, createDto.Medic, createDto.Time, createDto.PetId);
            return Created();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] MedicalHistoriesDto updateDto)
        {
            await _MHService.UpdateAsync(id, updateDto.Diagnostic,updateDto.Medic,updateDto.Time,updateDto.PetId );
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _MHService.DeleteAsync(id);
            return NoContent();
        }
    }
}
