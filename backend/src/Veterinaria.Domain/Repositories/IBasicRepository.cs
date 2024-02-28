namespace Veterinaria.Domain.Repositories;
public interface IBasicRepository<TModel, TypeId> where TModel : class
{
    Task<List<TModel>> FindAllAsync();

    Task<TModel?> FindByIdAsync(TypeId id);

    Task<TModel> AddAsync(TModel model);

    Task<TModel> UpdateAsync(TModel model);

    Task DeleteAsync(TModel model);

}