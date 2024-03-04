using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services;

public interface IPetService
{
    Task<List<Pet>> GetAllByUserAccount(string idUserAccount);
    Task<List<Pet>> GetAllByClientUser(int userId);
}