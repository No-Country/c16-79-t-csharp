using Veterinaria.Domain.Models;

namespace Veterinaria.Application.Dtos
{
    public record SaleDto(
        int Id,
        DateTime Date,
        float Total,
        int ClientUserId,
        ClientUser ClientUser
    );
}