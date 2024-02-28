
using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services;

public interface IDateServise
{
    Task<Date> GetByIdAsync(int id);
    Task<List<Date>> GetAllAsync();
    Task<Date> CreateAsync(DateTime time, int  serviceId, int petId );
    Task<Date> UpdateAsync(int id, DateTime time, int serviceId, int petId ,DateState state);
    Task DeleteAsync(int id);

    //Task ExampleFunction();
}
