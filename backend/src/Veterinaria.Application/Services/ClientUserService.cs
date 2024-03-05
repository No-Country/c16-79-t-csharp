using Veterinaria.Application.CustomeException;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;

namespace Veterinaria.Application.Services;

public class ClientUserService : IClientUserService
{
    private readonly IClientUserRepository _repository;

    public ClientUserService(IClientUserRepository repository)
    {
        _repository = repository;
    }

    public async Task<ClientUser> GetByUserAccount(string idUserAccount)
    {
        ClientUser clientUser = await _repository.FindByUserAccount(idUserAccount)?? throw new ResourceNotFoundException("No se pudo encontrar el Usuario");
        return clientUser;
    }
}
