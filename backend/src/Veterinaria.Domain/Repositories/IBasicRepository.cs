namespace Veterinaria.Domain.Repositories;
public interface IBasicRepository<TModel, TypeId> where TModel : class
{
    Task<List<TModel>> GetAll();

    Task<TModel?> GetById(TypeId id);

    Task<TModel> Add(TModel model);

    Task<TModel> Update(TModel model);

    Task Delete(TModel model);
}