using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories
{
    public interface IProductRepository : IBasicRepository<Product, int>
    {
        Task<Product> CreateAsync(Product product);
    }
}