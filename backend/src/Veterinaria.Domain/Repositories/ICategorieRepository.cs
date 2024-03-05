using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories
{
    public interface ICategorieRepository : IBasicRepository<Categorie, int>
    {
        Task<Categorie> MetodoPerzonalizado(Categorie categorie);
    }
}