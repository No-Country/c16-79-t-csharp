using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services;

public interface IMockService
{
    Task<MockModel> GetByIdAsync(int id);
    Task<List<MockModel>> GetAllAsync();
    Task<MockModel> CreateAsync(string atributo1, int atributo2);
    Task<MockModel> UpdateAsync(int id, string atributo1, int atributo2);
    Task DeleteAsync(int id);
}
