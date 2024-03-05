using System.Drawing;
using Microsoft.EntityFrameworkCore;
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

        override public async Task<List<Product>> FindAllAsync()
        {
            return await _context.Set<Product>().Include(p => p.Categories).ToListAsync();
        }

        override public async Task<Product?> FindByIdAsync(int id)
        {
            return await _context.Set<Product>().Include(p => p.Categories).FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<List<Product>> GetLastFiveProductsAsync()
        {
            return await _context.Products.OrderByDescending(p => p.Id).Take(5).ToListAsync();
        }
    }
}