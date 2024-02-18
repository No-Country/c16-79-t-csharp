using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;
using Veterinaria.Infrastructure.Repository;

namespace Veterinaria.Infrastructure;
public class MockRepository : BasicRepository<MockModel, int>, IMockRepository
{
    private readonly VeterinariaDbContext _context;
    public MockRepository(VeterinariaDbContext context) : base(context)
    {
        _context = context;
    }

    public Task MetodoPersonalizadoAsync(MockModel model)
    {
        //TODO : implementacion de metodo personalizado.
        throw new NotImplementedException();
    }
}