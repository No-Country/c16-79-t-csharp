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

    public Task DeleteAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task<List<MockModel>> GetAllAsync()
    {
        throw new NotImplementedException();
    }

    public Task<MockModel> GetByIdAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task<MockModel> UpdateAsync(int id, string atributo1, int atributo2)
    {
        throw new NotImplementedException();
    }
}
