using System.Net;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Veterinaria.Application.Dtos;
using Veterinaria.Application.Dtos.Wrappers;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Services;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SaleController : ControllerBase
    {
        private readonly ISaleService _saleService;
        private readonly IMapper _mapper;
        public SaleController(ISaleService saleService, IMapper mapper)
        {
            _saleService = saleService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<ResponseSucceded<IEnumerable<SaleDto>>>> GetAll()
        {
            List<Sale> sales = await _saleService.GetAllAsync();

            IEnumerable<SaleDto> saleDtos = sales.Select(s => _mapper.Map<SaleDto>(s));

            return Ok(
                new ResponseSucceded<IEnumerable<SaleDto>>((int)HttpStatusCode.OK, saleDtos)
            );
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseSucceded<SaleDto>>> GetById(int id)
        {
            Sale sale = await _saleService.GetByIdAsync(id);

            return Ok(new ResponseSucceded<SaleDto>((int)HttpStatusCode.OK, _mapper.Map<SaleDto>(sale)));
        }

        [HttpPost]
        public async Task<ActionResult<ResponseSucceded<SaleDto>>> Create([FromBody] SaleCreateDto saleCreateDto)
        {
            Sale sale = await _saleService.CreateAsync(saleCreateDto.Date, saleCreateDto.Total, saleCreateDto.ClientUserId);

            return Ok(new ResponseSucceded<SaleDto>((int)HttpStatusCode.OK, _mapper.Map<SaleDto>(sale)));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ResponseSucceded<SaleDto>>> Update(int id, [FromBody] SaleUpdateDto saleUpdateDto)
        {
            Sale sale = await _saleService.UpdateAsync(id, saleUpdateDto.Date, saleUpdateDto.Total, saleUpdateDto.ClientUserId);

            return Ok(new ResponseSucceded<SaleDto>((int)HttpStatusCode.OK, _mapper.Map<SaleDto>(sale)));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ResponseSucceded<SaleDto>>> Delete(int id)
        {
            Sale sale = await _saleService.DeleteAsync(id);

            return Ok(new ResponseSucceded<SaleDto>((int)HttpStatusCode.OK, _mapper.Map<SaleDto>(sale)));
        }
        
    }
}