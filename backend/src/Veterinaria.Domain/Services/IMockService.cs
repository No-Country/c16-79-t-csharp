using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services;

public interface IMockService
{
    Task<MockModel> GetByIdAsync(int id);
    Task<List<MockModel>> GetAllAsync();
    Task<MockModel> CreateAsync(string attributo1, int attributo2);
    Task<MockModel> UpdateAsync(int id, string attributo1, int attributo2);
    Task DeleteAsync(int id);

    Task MetodoPersonalizado();//TODO: crear metodos segun la necisidad 
}
