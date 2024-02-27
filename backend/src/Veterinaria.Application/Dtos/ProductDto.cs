namespace Veterinaria.Application.Dtos
{
    public record ProductDto(
        int Id,
        string Name,
        string Description,
        float Price,
        int Stock,
        string ImageUrl
    );
}