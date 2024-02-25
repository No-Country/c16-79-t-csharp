using Microsoft.AspNetCore.Identity;
using Veterinaria.Domain.Models;

namespace Veterinaria.Infrastructure.AuthModels;

public class ApplicationUserAccount : IdentityUser, UserAccount
{
    public ICollection<ClientUser> ClientUsers { get; set; } = new List<ClientUser>();
}