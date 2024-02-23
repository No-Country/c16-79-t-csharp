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

        public async Task<Product> GetByAsync(int id)
        {
            if (await _productRepository.FindByIdAsync(id) is not Product product)
            {
                throw ResourceNotFoundException.NotFoundById<Product, int>(id);
            }
            return product;
        }

        public Task<List<Product>> GetAllAsync()
        {
            return _productRepository.FindAllAsync();
        }

        public Task<Product> CreateAsync(string name, float price, int stock, string description, string image, HashSet<Categorie> categories, HashSet<DetailSale> detailSales)
        {
            throw new NotImplementedException();
        }

        public Task<Product> UpdatePriceAsync(int id, float newPrice)
        {
            throw new NotImplementedException();
        }
    }
}