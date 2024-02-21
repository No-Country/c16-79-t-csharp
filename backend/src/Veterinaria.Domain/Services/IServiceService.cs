
using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services;
public interface IServiceService
{
    Task<Service> GetByIdAsync(int id);
    Task<List<Service>> GetAllAsync();
    Task<Service> CreateAsync(string type, string description, float price);
    Task<Service> UpdateAsync(int id, string type, string description, float price);
    Task DeleteAsync(int id);

    //Task ExampleFunction();
}

