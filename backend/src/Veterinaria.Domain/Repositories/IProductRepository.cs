using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories
{
    public interface IProductRepository : IBasicRepository<Product, int>
    {
        Task<List<Product>> GetLastFiveProductsAsync();
    }
}