using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;
using Veterinaria.Infrastructure.Repositories;

namespace Veterinaria.Infrastructure
{
    public class DetailSaleRepository : BasicRepository<DetailSale, int>, IDetailSaleRepository
    {
        private readonly VeterinariaDbContext _context;
        public DetailSaleRepository(VeterinariaDbContext context) : base(context)
        {
            _context = context;
        }

        public Task<DetailSale> MetodoPerzonalizado(DetailSale detailSale)
        {
            throw new NotImplementedException();
        }
    }
}