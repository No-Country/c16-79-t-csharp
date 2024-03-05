using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories
{
    public interface ISaleRepository : IBasicRepository<Sale, int>
    {
        Task<Sale> MetodoPersonalizado(Sale sale);
    }
}