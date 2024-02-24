using Veterinaria.Domain.Models;
using Veterinaria.Domain.Services;
using Veterinaria.Domain.Repositories;
using Veterinaria.Application.CustomeException;

namespace Veterinaria.Application.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Product> GetByIdAsync(int id)
        {
            if (await _productRepository.FindByIdAsync(id) is not Product product)
            {
                throw ResourceNotFoundException.NotFoundById<Product, int>(id);
            }
            return product;
        }

        public async Task<List<Product>> GetAllAsync()
        {
            return await _productRepository.FindAllAsync();
        }

        public async Task<Product> CreateAsync(string name, float price, int stock, string description, string image)
        {
            Product product = Product.CreateProduct(name, price, stock, description, image);
            Product savedProduct = await _productRepository.AddAsync(product);
            return savedProduct;
        }

        public async Task<Product> UpdateAsync(int id, string name, float price, int stock, string description, string image)
        {
            Product product = await GetByIdAsync(id);
            product.Update(name, price, stock, description, image);
            Product updatedProduct = await _productRepository.UpdateAsync(product);
            return updatedProduct;
        }

        public async Task DeleteAsync(int id)
        {
            Product product = await GetByIdAsync(id);
            await _productRepository.DeleteAsync(product);
        }
    }
}