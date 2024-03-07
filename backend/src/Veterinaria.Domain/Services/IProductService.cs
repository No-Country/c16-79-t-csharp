using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services
{
    public interface IProductService
    {
        Task<Product> GetByIdAsync(int id);
        Task<List<Product>> GetAllAsync();
        Task<Product> CreateAsync(string name, float price, int stock, string description, string image, List<int> CategoryIds);
        Task<Product> UpdateAsync(int id, string name, float price, int stock, string description, string image);
        Task DeleteAsync(int id);
        Task<List<Categorie>> GetCategoriesAsync(int id);
        Task<Product> DeleteCategoryAsync(int id, int? categoryId);
        Task<Product> AddCategoriesAsync(int id, List<int> CategoryIds);
        Task<List<Product>> GetLastFiveProductsAsync();
    }
}