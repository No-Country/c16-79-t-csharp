using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories;

public interface ICategorieService
{
    Task<Categorie> GetByIdAsync(int id);
    Task<List<Categorie>> GetAllAsync();
    Task<Categorie> CreateAsync(string name);
    Task<Categorie> UpdateAsync(int id, string name);
    Task DeleteAsync(int id);
}