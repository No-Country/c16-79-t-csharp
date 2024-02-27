using System.Net;
using AutoMapper;
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
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IMapper _mapper;
        public ProductController(IProductService productService, IMapper mapper)
        {
            _productService = productService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<ResponseSucceded<IEnumerable<ProductDto>>>> GetAll()
        {
            List<Product> products = await _productService.GetAllAsync();

            IEnumerable<ProductDto> productDtos = products.Select(p => _mapper.Map<ProductDto>(p));

            return Ok(
                new ResponseSucceded<IEnumerable<ProductDto>>((int)HttpStatusCode.OK, productDtos)
            );
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseSucceded<ProductDto>>> GetById(int id)
        {
            Product product = await _productService.GetByIdAsync(id);

            return Ok(new ResponseSucceded<ProductDto>((int)HttpStatusCode.OK, _mapper.Map<ProductDto>(product)));
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ProductCreateDto createDto)
        {
            Product product = await _productService.CreateAsync(createDto.Name, createDto.Price, createDto.Stock, createDto.Description, createDto.ImageUrl);
            return Created();
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] ProductCreateDto updateDto)
        {
            await _productService.UpdateAsync(id, updateDto.Name, updateDto.Price, updateDto.Stock, updateDto.Description, updateDto.ImageUrl);
            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _productService.DeleteAsync(id);
            return NoContent();
        }
    }
}