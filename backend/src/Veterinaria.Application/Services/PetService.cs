using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;

namespace Veterinaria.Application.Services;

public class PetService : IPetService
{
    private readonly IPetRepository _repository;

    public PetService(IPetRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<Pet>> GetAllByClientUser(int userId)
    {
        List<Pet> pets = await _repository.FindAllByUserId(userId);
        return pets;
    }

    public async Task<List<Pet>> GetAllByUserAccount(string idUserAccount)
    {
        List<Pet> pets = await _repository.FindAllByUserAccount(idUserAccount);
        return pets;
    }
}