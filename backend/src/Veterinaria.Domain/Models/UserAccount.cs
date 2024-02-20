namespace Veterinaria.Domain.Models;

public interface UserAccount
{
    string Id { get; set; }
    string Email { get; set; }
    string PasswordHash { get; set; }
    ICollection<ClientUser> ClientUsers { get; set; }
}