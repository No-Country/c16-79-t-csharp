using Veterinaria.Domain.Models;

namespace  Veterinaria.Domain.Services
{
    public interface ISaleService
    {
        Task<Sale> GetByIdAsync(int id);
        Task<List<Sale>> GetAllAsync();
        Task<Sale> CreateAsync(DateTime date, float total, int clientUserId);
        Task<Sale> UpdateAsync(int id, DateTime date, float total, int clientUserId);
        Task DeleteAsync(int id);
    }
}