using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;
using Veterinaria.Application.CustomeException;

namespace Veterinaria.Application.Services
{
    public class DetailSaleService : IDetailSaleService
    {
        private readonly IDetailSaleRepository _detailSaleRepository;
        public DetailSaleService(IDetailSaleRepository detailSaleRepository)
        {
            _detailSaleRepository = detailSaleRepository;
        }

        public async Task<DetailSale> GetByIdAsync(int id)
        {
            if (await _detailSaleRepository.FindByIdAsync(id) is not DetailSale detailSale)
            {
                throw ResourceNotFoundException.NotFoundById<DetailSale, int>(id);
            }
            return detailSale;
        }

        public async Task<List<DetailSale>> GetAllAsync()
        {
            return await _detailSaleRepository.FindAllAsync();
        }

        public async Task<DetailSale> CreateAsync(int quantity, int saleId, int productId)
        {
            DetailSale detailSale = DetailSale.CreateDetailSale(quantity, saleId, productId);
            DetailSale savedDetailSale = await _detailSaleRepository.AddAsync(detailSale);
            return savedDetailSale;
        }

        public async Task<DetailSale> UpdateAsync(int id, int quantity, int saleId, int productId)
        {
            DetailSale detailSale = await GetByIdAsync(id);
            detailSale.Update(quantity, saleId, productId);
            DetailSale updatedDetailSale = await _detailSaleRepository.UpdateAsync(detailSale);
            return updatedDetailSale;
        }

        public async Task DeleteAsync(int id)
        {
            DetailSale detailSale = await GetByIdAsync(id);
            await _detailSaleRepository.DeleteAsync(detailSale);
        }
    }
}