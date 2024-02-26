using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;
using Veterinaria.Infrastructure.Repository;

namespace Veterinaria.Infrastructure;

public class SaleRepository : BasicRepository<Sale, int>, ISaleRepository
{
    private readonly VeterinariaDbContext _context;
    public SaleRepository(VeterinariaDbContext context) : base(context)
    {
        _context = context;
    }

    public Task<Sale> MetodoPersonalizado(Sale sale)
    {
        throw new NotImplementedException();
    }

    // TODO: Rescrivir el metodo AddAsync para la Transaccion
}