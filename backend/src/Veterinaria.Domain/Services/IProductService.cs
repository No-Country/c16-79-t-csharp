using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services
{
    public interface IProductService
    {
        Task<Product> GetByIdAsync(int id);
        Task<List<Product>> GetAllAsync();
        Task<Product> CreateAsync(string name, float price, int stock, string description, string image);
        Task<Product> UpdateAsync(int id, string name, float price, int stock, string description, string image);
        Task DeleteAsync(int id);
    }
}