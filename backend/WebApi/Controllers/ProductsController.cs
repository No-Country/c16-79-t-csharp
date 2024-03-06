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
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IMapper _mapper;
        public ProductsController(IProductService productService, IMapper mapper)
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
        public async Task<ActionResult<ResponseSucceded<ProductDto>>> Create([FromBody] ProductCreateDto productCreateDto)
        {
            Product product = await _productService.CreateAsync(productCreateDto.Name, productCreateDto.Price, productCreateDto.Stock, productCreateDto.Description, productCreateDto.Image, productCreateDto.CategoryIds);

            return CreatedAtAction(nameof(GetById), new { id = product.Id }, new ResponseSucceded<ProductDto>((int)HttpStatusCode.Created, _mapper.Map<ProductDto>(product)));
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<ActionResult<ResponseSucceded<ProductDto>>> Update(int id, [FromBody] ProductUpdateDto productUpdateDto)
        {
            Product product = await _productService.UpdateAsync(id, productUpdateDto.Name, productUpdateDto.Price, productUpdateDto.Stock, productUpdateDto.Description, productUpdateDto.Image);

            return Ok(new ResponseSucceded<ProductDto>((int)HttpStatusCode.OK, _mapper.Map<ProductDto>(product)));
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _productService.DeleteAsync(id);

            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{productId}/categories/{categoryId?}")]
        public async Task<IActionResult> DeleteCategory(int productId, int? categoryId)
        {
            await _productService.DeleteCategoryAsync(productId, categoryId);
            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("{productId}/categories")]
        public async Task<ActionResult> AddCategories(int productId, [FromBody] List<int> CategoryIds)
        {
            await _productService.AddCategoriesAsync(productId, CategoryIds);
            return NoContent();
        }

        [HttpGet("{productId}/categories")]
        public async Task<ActionResult<List<CategorieDto>>> GetCategories(int productId)
        {
            var categories = await _productService.GetCategoriesAsync(productId);
            return _mapper.Map<List<CategorieDto>>(categories);   
        }

        [HttpGet("lastFive")]
        public async Task<ActionResult<ResponseSucceded<List<ProductDto>>>> GetLastFive()
        {
            var products = await _productService.GetLastFiveProductsAsync();
            return Ok(new ResponseSucceded<List<ProductDto>>((int)HttpStatusCode.OK, _mapper.Map<List<ProductDto>>(products)));
        }
        
        // Agregar endpoint httpPatch con id y cant de un producto para actualizar stock del mismo.
    }
}