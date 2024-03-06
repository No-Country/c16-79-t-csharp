using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using Veterinaria.Application.Dtos.Wrappers;
using Veterinaria.Application.Dtos;
using Veterinaria.Domain.Services;
using Veterinaria.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using WebApi.Utilities;

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

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public async Task<ActionResult<ResponseSucceded<IEnumerable<MedicalHistoriesDto>>>> GetAll()
        {
            List<MedicalHistory> Dates = await _MHService.GetAllAsync();
            IEnumerable<MedicalHistoriesDto> datesDtos =
               Dates.Select(
                    c => new MedicalHistoriesDto(c.Id, c.Diagnostic, c.Medic, c.Time, c.PetId));
            return Ok(
                new ResponseSucceded<IEnumerable<MedicalHistoriesDto>>((int)HttpStatusCode.OK, datesDtos)
            );
        }

        [Authorize(Roles = "Admin, Cliente")]
        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseSucceded<MedicalHistoriesDto>>> GetById(int id)
        {
            MedicalHistory mHistory = await _MHService.GetByIdAsync(id);
            return Ok(new ResponseSucceded<MedicalHistoriesDto>((int)HttpStatusCode.OK,
                new MedicalHistoriesDto(mHistory.Id, mHistory.Diagnostic, mHistory.Medic, mHistory.Time, mHistory.PetId)));
        }

        [Authorize(Roles = "Admin, Cliente")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] MedicalHistoriesCreatedDto createDto)
        {
            MedicalHistory medicalHistory = await _MHService.CreateAsync(createDto.Diagnostic, createDto.Medic, createDto.Time, createDto.PetId);
            return Created();
        }

        [Authorize(Roles = "Admin, Cliente")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] MedicalHistoriesDto updateDto)
        {
            await _MHService.UpdateAsync(id, updateDto.Diagnostic, updateDto.Medic, updateDto.Time, updateDto.PetId);
            return NoContent();
        }

        [Authorize(Roles = "Admin, Cliente")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _MHService.DeleteAsync(id);
            return NoContent();
        }


        
        
    }
}
