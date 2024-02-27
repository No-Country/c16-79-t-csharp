namespace Veterinaria.Application.Dtos
{
    public record SaleCreateDto(
        DateTime Date,
        float Total,
        int ClientUserId
    );
}