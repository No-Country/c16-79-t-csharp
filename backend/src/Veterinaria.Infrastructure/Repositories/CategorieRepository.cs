using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;
using Veterinaria.Infrastructure.Repository;

namespace Veterinaria.Infrastructure
{
    public class CategorieRepository : BasicRepository<Categorie, int>, ICategorieRepository
    {
        private readonly VeterinariaDbContext _context;
        public CategorieRepository(VeterinariaDbContext context) : base(context)
        {
            _context = context;
        }

        public Task<Categorie> MetodoPerzonalizado(Categorie categorie)
        {
            throw new NotImplementedException();
        }
    }
}