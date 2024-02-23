﻿using System;
using Veterinaria.Application.CustomeException;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;

namespace Veterinaria.Application.Services;

public class DateService : IDateServise
{ 
    private readonly IDateRepository _repository;
    public DateService(IDateRepository repository)
    {
        _repository = repository;
    }
    public Task ChangeState(int id, DateState state)
    {
        throw new NotImplementedException();
    }

    public async Task<Date> CreateAsync(DateTime time, int  serviceId, int petId)
    {
        Date model = Date.Create(time, serviceId,petId);
        Date savedModel = await _repository.AddAsync(model);
        return savedModel;
    }

    public async Task DeleteAsync(int id)
    {
        Date model = await GetByIdAsync(id);
        await _repository.DeleteAsync(model);
    }

    public async Task<List<Date>> GetAllAsync()
    {
        return await _repository.FindAllAsync();
    }

    public async Task<Date> GetByIdAsync(int id)
    {
        if (await _repository.FindByIdAsync(id) is not Date model)
        {
            throw ResourceNotFoundException.NotFoundById<Date, int>(id);
        }
        return model;
    }

    public  async Task<Date> UpdateAsync(int id, DateTime time, int serviceId, int petId, DateState state)
    {
        Date model = await GetByIdAsync(id);
        model.UpdateModel( time,  serviceId,  petId,  state);
        Date updatedModel = await _repository.UpdateAsync(model);
        return updatedModel;
    }
}
