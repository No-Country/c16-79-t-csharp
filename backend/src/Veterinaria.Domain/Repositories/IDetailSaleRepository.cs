using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories
{
    public interface IDetailSaleRepository : IBasicRepository<DetailSale, int>
    {
        Task<DetailSale> MetodoPerzonalizado(DetailSale detailSale);
    }
}