using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;

namespace Veterinaria.Application.Services;

public class MockService : IMockService
{
    private readonly IMockRepository _repository;
    public MockService(IMockRepository repository)
    {
        _repository = repository;
    }
    public async Task<MockModel> CreateAsync(string atributo1, int atributo2)
    {
        MockModel model = MockModel.Create(atributo1, atributo2);
        MockModel savedModel = await _repository.Add(model);
        return savedModel;
    }

    public async Task DeleteAsync(int id)
    {
        MockModel model = await GetByIdAsync(id);
        await _repository.Delete(model);
    }

    public Task<List<MockModel>> GetAllAsync()
    {
        return _repository.GetAll();
    }

    public async Task<MockModel> GetByIdAsync(int id)
    {
        if (await _repository.GetById(id) is not MockModel model)
        {
            //TODO: personalizar Exception
            throw new Exception("Implentar error notfoud");
        }
        return model;
    }

    public async Task<MockModel> UpdateAsync(int id, string attributo1, int attributo2)
    {
        MockModel model = await GetByIdAsync(id);
        model.UpdateModel(attributo1, attributo2);
        MockModel updatedModel = await _repository.Update(model);
        return updatedModel;
    }
}
