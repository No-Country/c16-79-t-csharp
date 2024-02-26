using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Repositories
{
    public class ProductRepository : BasicRepository<Product, int>, IProductRepository
    {
        private readonly VeterinariaDbContext _context;
        public ProductRepository(VeterinariaDbContext context) : base(context)
        {
            _context = context;
        }

        public Task<Product> CreateAsync(Product product)
        {
            throw new NotImplementedException();
        }
    }
}