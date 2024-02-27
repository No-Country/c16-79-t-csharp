namespace Veterinaria.Application.Dtos
{
    public record ProductCreateDto(
        string Name,
        string Description,
        float Price,
        int Stock,
        string ImageUrl
    );
}