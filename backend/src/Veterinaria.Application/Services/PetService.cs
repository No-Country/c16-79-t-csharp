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

    public async Task<List<Pet>> GetAllByUserAccount(string idUserAccount)
    {
        List<Pet> pets = await _repository.FindAllByUserAccount(idUserAccount);
        return pets;
    }
}