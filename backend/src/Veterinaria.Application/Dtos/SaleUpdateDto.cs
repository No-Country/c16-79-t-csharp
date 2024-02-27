namespace Veterinaria.Application.Dtos
{
    public record SaleUpdateDto(
        int Id,
        DateTime Date,
        float Total,
        int ClientUserId
    );
}