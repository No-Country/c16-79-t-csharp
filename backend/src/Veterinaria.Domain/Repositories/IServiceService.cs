using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories;

public interface IServiceService : IBasicRepository<Service, int>
{
    Task MetodoPersonalizadoAsync(Service model);
}