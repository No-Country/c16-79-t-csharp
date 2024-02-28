using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Repositories;

public class CategorieRepository: BasicRepository<Categorie,int>, ICategorieRepository
{
    private readonly VeterinariaDbContext _context;

    public CategorieRepository(VeterinariaDbContext context):base(context)
    {
        _context = context;
    }
}