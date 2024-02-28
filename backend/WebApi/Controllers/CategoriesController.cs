
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Veterinaria.Application.Dtos;
using Veterinaria.Application.Dtos.Wrappers;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly ICategorieService _categorieService;

    public CategoriesController(ICategorieService categorieService)
    {
        _categorieService = categorieService;
    }


    [HttpGet] // INFO: Sin autorizacion
    public async Task<ActionResult<ResponseSucceded<IEnumerable<CategorieDto>>>> GetAll()
    {
        List<Categorie> catetegories = await _categorieService.GetAllAsync();

        IEnumerable<CategorieDto> categorieDtos = catetegories.Select(c => new CategorieDto(c.Id, c.Name));

        return Ok(
            new ResponseSucceded<IEnumerable<CategorieDto>>((int)HttpStatusCode.OK, categorieDtos)
        );
    }

    [HttpGet("{id}")] // INFO: Sin autorizacion
    public async Task<ActionResult<ResponseSucceded<CategorieDto>>> GetById(int id)
    {
        Categorie categorie = await _categorieService.GetByIdAsync(id);

        //TODO: usar AutoMapper
        return Ok(new ResponseSucceded<CategorieDto>((int)HttpStatusCode.OK, new CategorieDto(categorie.Id, categorie.Name)));
    }

    [HttpPost] // INFO: Solo Admin
    public async Task<IActionResult> Create([FromBody] CategorieCreateDto createDto)
    {
        Categorie categorie = await _categorieService.CreateAsync(createDto.Name);
        return Created();
    }

    [HttpPut("{id}")] // INFO: Solo Admin
    public async Task<IActionResult> Update(int id, [FromBody] CategorieCreateDto updateDto)
    {
        await _categorieService.UpdateAsync(id, updateDto.Name);
        return NoContent();
    }

    [HttpDelete("{id}")] // INFO: Solo Admin
    public async Task<IActionResult> Delete(int id)
    {
        await _categorieService.DeleteAsync(id);
        return NoContent();
    }
}

