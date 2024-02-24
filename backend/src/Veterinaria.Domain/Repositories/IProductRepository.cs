using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories
{
    public interface IProductRepository : IBasicRepository<Product, int>
    {
        Task<Product> MetodoPerzonalizado(Product product);
    }
}