using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories;

public interface IMockRepository : IBasicRepository<MockModel, int>
{
    Task MetodoPersonalizado(MockModel model);
}