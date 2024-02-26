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

        public async Task<Sale> GetByIdAsync(int id)
        {
            if (await _saleRepository.FindByIdAsync(id) is not Sale sale)
            {
                throw ResourceNotFoundException.NotFoundById<Sale, int>(id);
            }
            return sale;
        }

        public async Task<List<Sale>> GetAllAsync()
        {
            return await _saleRepository.FindAllAsync();
        }

        public async Task<Sale> CreateAsync(DateTime date, float total, int clientUserId)
        {
            // Todo: Verificaciones de productos 
            Sale sale = Sale.MakeSale(date, total, clientUserId);
            Sale savedSale = await _saleRepository.AddAsync(sale);
            return savedSale;
        }

        public async Task<Sale> UpdateAsync(int id, DateTime date, float total, int clientUserId)
        {
            Sale sale = await GetByIdAsync(id);
            sale.Update(date, total, clientUserId);
            Sale updatedSale = await _saleRepository.UpdateAsync(sale);
            return updatedSale;
        }

        public async Task DeleteAsync(int id)
        {
            Sale sale = await GetByIdAsync(id);
            await _saleRepository.DeleteAsync(sale);
        }
    }
}