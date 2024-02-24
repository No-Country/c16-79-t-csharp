using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;
using Veterinaria.Application.CustomeException;
using System.Drawing;
using System.Diagnostics.Contracts;

namespace Veterinaria.Application.Services
{
    public class CategorieService : ICategorieService
    {
        private readonly ICategorieRepository _categorieRepository;
        public CategorieService(ICategorieRepository categorieRepository)
        {
            _categorieRepository = categorieRepository;
        }

        public async Task<Categorie> GetByIdAsync(int id)
        {
            if (await _categorieRepository.FindByIdAsync(id) is not Categorie categorie)
            {
                throw ResourceNotFoundException.NotFoundById<Categorie, int>(id);
            }

            return categorie;
        }

        public async Task<List<Categorie>> GetAllAsync()
        {
            return await _categorieRepository.FindAllAsync();
        }

        public async Task<Categorie> CreateAsync(string name)
        {
            Categorie categorie = Categorie.CreateCategory(name);
            Categorie savedCategorie = await _categorieRepository.AddAsync(categorie);
            return savedCategorie;
        }

        public async Task<Categorie> UpdateAsync(int id, string name)
        {
            Categorie categorie = await GetByIdAsync(id);
            categorie.UpdateName(name);
            Categorie updatedCategorie = await _categorieRepository.UpdateAsync(categorie);
            return updatedCategorie;
        }

        public async Task DeleteAsync(int id)
        {
            Categorie categorie = await GetByIdAsync(id);
            await _categorieRepository.DeleteAsync(categorie);
        }
    }
}