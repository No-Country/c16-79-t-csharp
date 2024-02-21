
using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services;

public interface IDateServise
{
    Task<Date> GetByIdAsync(int id);
    Task<List<Date>> GetAllAsync();
    Task<Date> CreateAsync(DateTime time, Service service, Pet pet);
    Task<Date> UpdateAsync(int id, DateTime time, Service service, Pet pet ,DateState dateState);
    Task DeleteAsync(int id);

    Task ChangeState(int id, int state);
    //Task ExampleFunction();
}
