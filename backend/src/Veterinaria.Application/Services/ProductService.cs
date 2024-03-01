using Veterinaria.Domain.Models;
using Veterinaria.Domain.Services;
using Veterinaria.Domain.Repositories;
using Veterinaria.Application.CustomeException;

namespace Veterinaria.Application.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        private readonly ICategorieRepository _categoryRepository;
        public ProductService(IProductRepository productRepository, ICategorieRepository categorieRepository)
        {
            _productRepository = productRepository;
            _categoryRepository = categorieRepository;
        }

        public async Task<Product> GetByIdAsync(int id)
        {
            if (await _productRepository.FindByIdAsync(id) is not Product product)
            {
                throw ResourceNotFoundException.NotFoundById<Product, int>(id);
            }
            return product;
        }

        public async Task<List<Product>> GetAllAsync()
        {
            return await _productRepository.FindAllAsync();
        }

        public async Task<Product> CreateAsync(string name, float price, int stock, string description, string image, List<int> CategoryIds)
        {
            var categories = new HashSet<Categorie>();
            foreach (var id in CategoryIds)
            {
                var category = await _categoryRepository.FindByIdAsync(id);
                if (category == null)
                {
                    throw new ArgumentException($"There is no category with the ID {id}", nameof(CategoryIds));
                }

                categories.Add(category);
            }
            Product product = Product.CreateProduct(name, price, stock, description, image);
            product.AssignCategory(categories);
            Product savedProduct = await _productRepository.AddAsync(product);
            return savedProduct;
        }

        public async Task<Product> UpdateAsync(int id, string name, float price, int stock, string description, string image)
        {
            Product product = await GetByIdAsync(id);
            product.Update(name, price, stock, description, image);
            Product updatedProduct = await _productRepository.UpdateAsync(product);
            return updatedProduct;
        }

        public async Task DeleteAsync(int id)
        {
            Product product = await GetByIdAsync(id);
            await _productRepository.DeleteAsync(product);   
        }

        public async Task<List<Categorie>> GetCategoriesAsync(int id)
        {
            Product product = await GetByIdAsync(id);
            return product.Categories.ToList();
        }

        public async Task<Product> DeleteCategoryAsync(int id, int? categoryId)
        {
            Product product = await GetByIdAsync(id);
            if (categoryId.HasValue)
            {
                var category = product.Categories.SingleOrDefault(c => c.Id == categoryId);
                if (category == null)
                {
                    throw new ArgumentException($"The product does not have a category with the ID {categoryId}", nameof(categoryId));
                }
                product.Categories.Remove(category);
            }
            else
            {
                product.Categories.Clear();
            }

            Product updatedProduct = await _productRepository.UpdateAsync(product);
            return updatedProduct;
        }

        public async Task<Product> AddCategoriesAsync(int id, List<int> CategoryIds)
        {
            Product product = await GetByIdAsync(id);
            foreach (var categoryId in CategoryIds)
            {
                var category = await _categoryRepository.FindByIdAsync(categoryId);
                if (category == null)
                {
                    throw new ArgumentException($"No category with the ID {categoryId} exists", nameof(CategoryIds));
                }
                product.Categories.Add(category);
            }

            Product updatedProduct = await _productRepository.UpdateAsync(product);
            return updatedProduct;
        }
    }
}