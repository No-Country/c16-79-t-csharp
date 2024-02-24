using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services
{
    public interface IDetailSaleService
    {
        Task<DetailSale> GetByIdAsync(int id);
        Task<List<DetailSale>> GetAllAsync();
        Task<DetailSale> CreateAsync(int saleId, int productId, int quantity);
        Task<DetailSale> UpdateAsync(int id, int saleId, int productId, int quantity);
        Task DeleteAsync(int id);
    }
}