using AutoMapper;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Veterinaria.Application.Dtos;
using Veterinaria.Application.Dtos.Wrappers;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Services;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DetailSaleController : ControllerBase
    {
        private readonly IDetailSaleService _detailSaleService;
        private readonly IMapper _mapper;
        public DetailSaleController(IDetailSaleService detailSaleService, IMapper mapper)
        {
            _detailSaleService = detailSaleService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<ResponseSucceded<IEnumerable<DetailSaleDto>>>> GetAll()
        {
            List<DetailSale> detailSales = await _detailSaleService.GetAllAsync();

            IEnumerable<DetailSaleDto> detailSaleDtos = detailSales.Select(ds => _mapper.Map<DetailSaleDto>(ds));

            return Ok(
                new ResponseSucceded<IEnumerable<DetailSaleDto>>((int)HttpStatusCode.OK, detailSaleDtos)
            );
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseSucceded<DetailSaleDto>>> GetById(int id)
        {
            DetailSale detailSale = await _detailSaleService.GetByIdAsync(id);

            return Ok(new ResponseSucceded<DetailSaleDto>((int)HttpStatusCode.OK, _mapper.Map<DetailSaleDto>(detailSale)));
        }

        [HttpPost]
        public async Task<ActionResult<ResponseSucceded<DetailSaleDto>>> Create([FromBody] DetailSaleCreateDto detailSaleCreateDto)
        {
            DetailSale detailSale = await _detailSaleService.CreateAsync(detailSaleCreateDto.SaleId, detailSaleCreateDto.ProductId, detailSaleCreateDto.Quantity);

            return Ok(new ResponseSucceded<DetailSaleDto>((int)HttpStatusCode.OK, _mapper.Map<DetailSaleDto>(detailSale)));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ResponseSucceded<DetailSaleDto>>> Update(int id, [FromBody] DetailSaleUpdateDto detailSaleUpdateDto)
        {
            DetailSale detailSale = await _detailSaleService.UpdateAsync(id, detailSaleUpdateDto.SaleId, detailSaleUpdateDto.ProductId, detailSaleUpdateDto.Quantity);

            return Ok(new ResponseSucceded<DetailSaleDto>((int)HttpStatusCode.OK, _mapper.Map<DetailSaleDto>(detailSale)));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ResponseSucceded<DetailSaleDto>>> Delete(int id)
        {
            DetailSale detailSale = await _detailSaleService.DeleteAsync(id);

            return Ok(new ResponseSucceded<DetailSaleDto>((int)HttpStatusCode.OK, _mapper.Map<DetailSaleDto>(detailSale)));
        }
    }
}