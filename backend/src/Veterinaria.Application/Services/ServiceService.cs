using System;
using Veterinaria.Application.CustomeException;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;

namespace Veterinaria.Application.Services;
public class ServiceService : IServiceService
{
    private readonly IServiceRepository _repository;
    public ServiceService(IServiceRepository repository)
    {
        _repository = repository;
    }

    public async Task<Service> CreateAsync(string type, string description, float price)
    {
        Service model = Service.Create(type, description, price);
        Service savedModel = await _repository.AddAsync(model);
        return savedModel;
    }

    public async Task DeleteAsync(int id)
    {
        Service model = await GetByIdAsync(id);
        await _repository.DeleteAsync(model);
    }

    public async Task<List<Service>> GetAllAsync()
    {
        return await _repository.FindAllAsync();
    }

    public async Task<Service> GetByIdAsync(int id)
    {
        if (await _repository.FindByIdAsync(id) is not Service model)
        {
            throw ResourceNotFoundException.NotFoundById<Service, int>(id);
        }
        return model;
    }

    public async Task<Service> UpdateAsync(int id, string type, string description, float price)
    {
        Service model = await GetByIdAsync(id);
        model.UpdateModel(type, description, price);
        Service updatedModel = await _repository.UpdateAsync(model);
        return updatedModel;
    }


}

