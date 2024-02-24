using Veterinaria.Domain.Services;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Application.CustomeException;

namespace Veterinaria.Application.Services
{
    public class SaleService : ISaleService
    {
        private readonly ISaleRepository _saleRepository;
        private readonly IProductService _productService;
        public SaleService(ISaleRepository saleRepository, IProductService productService)
        {
            _saleRepository = saleRepository;
            _productService = productService;
        }

        public async Task<Sale> GetByAsync(int id)
        {
            if (await _saleRepository.FindByIdAsync(id) is not Sale sale)
            {
                throw ResourceNotFoundException.NotFoundById<Sale, int>(id);
            }
            return sale;
        }

        public Task<List<Sale>> GetAllAsync()
        {
            return _saleRepository.FindAllAsync();
        }

        public Task<Sale> CreateAsync(DateTime date, float total, int clientUserId, HashSet<DetailSale> detailSales)
        {
            // Todo: Verificaciones de productos 
            Sale sale = Sale.MakeSale(date, total, clientUserId);
            return _saleRepository.CreateAsync(sale);
        }
    }
}