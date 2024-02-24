using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories;

public interface IServiceRepository : IBasicRepository<Service, int>
{
    Task MetodoPersonalizadoAsync(Service model);
}