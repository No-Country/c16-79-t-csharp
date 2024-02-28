using System;
using Veterinaria.Application.CustomeException;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;

namespace Veterinaria.Application.Services;

public class MedicalHistoryService : IMedicalHistoryService
{
    private readonly IMedicalHistoryRepository _repository;

    // TODO: Agregar el servicio de los Pets
    public MedicalHistoryService(IMedicalHistoryRepository repository)
    {
        _repository = repository;
    }

    public async Task<MedicalHistory> CreateAsync(string diagnostic, string medic, DateTime time, int petId)
    {
        MedicalHistory model = MedicalHistory.Create(diagnostic, medic, time, petId);
        MedicalHistory savedModel = await _repository.AddAsync(model);
        return savedModel;
    }

    public async Task DeleteAsync(int id)
    {
        MedicalHistory model = await GetByIdAsync(id);
        await _repository.DeleteAsync(model);
    }

    public Task<List<MedicalHistory>> GetAllAsync()
    {
        return _repository.FindAllAsync();
    }

    public async Task<MedicalHistory> GetByIdAsync(int id)
    {
        if (await _repository.FindByIdAsync(id) is not MedicalHistory model)
        {
            throw ResourceNotFoundException.NotFoundById<MedicalHistory, int>(id);
        }
        return model;
    }

    public async Task<MedicalHistory> UpdateAsync(int id, string diagnostic, string medic, DateTime time, int petId)
    {
        MedicalHistory model = await GetByIdAsync(id);
        model.UpdateModel(diagnostic, medic, time, petId);
        MedicalHistory updatedModel = await _repository.UpdateAsync(model);
        return updatedModel;
    }
}

