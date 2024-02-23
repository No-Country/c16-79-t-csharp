using Veterinaria.Domain.Models;

namespace  Veterinaria.Domain.Services
{
    public interface ISaleService
    {
        Task<Sale> GetByAsync(int id);
        Task<List<Sale>> GetAllAsync();
        Task<Sale> CreateAsync(DateTime date, float total, int clientUserId);

    }
}