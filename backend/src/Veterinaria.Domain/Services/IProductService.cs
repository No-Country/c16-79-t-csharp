using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services
{
    public interface IProductService
    {
        Task<Product> GetByAsync(int id);
        Task<List<Product>> GetAllAsync();
        Task<Product> CreateAsync(string name, float price, int stock, string description, string image, HashSet<Categorie> categories, HashSet<DetailSale> detailSales);
        Task<Product> UpdatePriceAsync(int id, float newPrice);
    }
}