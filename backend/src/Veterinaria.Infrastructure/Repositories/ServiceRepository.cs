using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Repositories;
public class ServiceRepository : BasicRepository<Service, int>, IServiceRepository
{
    private readonly VeterinariaDbContext _context;
    public ServiceRepository(VeterinariaDbContext context) : base(context)
    {
        _context = context;
    }

    public Task MetodoPersonalizadoAsync(Service model)
    {
        //TODO : implementacion de metodo personalizado.
        throw new NotImplementedException();
    }
}