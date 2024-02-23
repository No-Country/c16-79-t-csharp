using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories;

public interface IServiceServiceRepository : IBasicRepository<Service, int>
{
    Task MetodoPersonalizadoAsync(Service model);
}