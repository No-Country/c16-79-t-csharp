using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;
using Veterinaria.Infrastructure.Repository;

namespace Veterinaria.Infrastructure
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