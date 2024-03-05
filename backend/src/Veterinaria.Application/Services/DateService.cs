using System;
using Veterinaria.Application.CustomeException;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;

namespace Veterinaria.Application.Services;

public class DateService : IDateServise
{
    private readonly IDateRepository _repository;
    private readonly IServiceService _servicesService;
    private readonly IPetRepository _petRepository;
    public DateService(IDateRepository repository, IServiceService servicesService,IPetRepository petRepository)
    {
        _repository = repository;
        _servicesService = servicesService;
        _petRepository = petRepository;
    }
    public Task ChangeState(int id, DateState state)
    {
        throw new NotImplementedException();
    }

    public async Task<Date> CreateAsync(DateTime time, int serviceId, int petId)
    {
        await _servicesService.GetByIdAsync(serviceId);
        
        var pet = await _petRepository.FindByIdAsync(petId);
        if (pet == null){
            throw ResourceNotFoundException.NotFoundById<Pet,int>(petId);
        }
        Date model = Date.Create(time, serviceId, petId);
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

    public async Task<Date> UpdateAsync(int id, DateTime time, int serviceId, int petId, DateState state)
    {
        await _servicesService.GetByIdAsync(serviceId);
        var pet = await _petRepository.FindByIdAsync(petId);
        if (pet == null){
            throw ResourceNotFoundException.NotFoundById<Pet,int>(petId);
        }
        Date model = await GetByIdAsync(id);
        model.UpdateModel(time, serviceId, petId, state);
        Date updatedModel = await _repository.UpdateAsync(model);
        return updatedModel;
    }
    public async Task<List<Date>> GetAllByClientUser(int id){

        return await _repository.FindAllByClientUserAsync(id);

    }
}
