using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services;

public interface IClientUserService
{
    Task<ClientUser> GetByUserAccount(string idUserAccount);
}