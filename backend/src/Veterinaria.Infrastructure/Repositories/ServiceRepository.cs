using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;
using Veterinaria.Infrastructure.Repository;

namespace Veterinaria.Infrastructure;
public class MockRepository : BasicRepository<Service, int>, IServiceServiceRepository
{
    private readonly VeterinariaDbContext _context;
    public MockRepository(VeterinariaDbContext context) : base(context)
    {
        _context = context;
    }

    public Task MetodoPersonalizadoAsync(Service model)
    {
        //TODO : implementacion de metodo personalizado.
        throw new NotImplementedException();
    }
}