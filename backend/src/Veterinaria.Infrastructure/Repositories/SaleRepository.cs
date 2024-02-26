using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Repositories;

public class SaleRepository : BasicRepository<Sale, int>, ISaleRepository
{
    private readonly VeterinariaDbContext _context;
    public SaleRepository(VeterinariaDbContext context) : base(context)
    {
        _context = context;
    }

    public Task<Sale> CreateAsync(Sale sale)
    {
        throw new NotImplementedException();
    }

    // TODO: Rescrivir el metodo AddAsync para la Transaccion
}