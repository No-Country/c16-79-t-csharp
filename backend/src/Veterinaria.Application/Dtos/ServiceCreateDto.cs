using Veterinaria.Domain.Models;
namespace Veterinaria.Application.Dtos;

public record ServiceCreateDto(
    string Type,
    string Description,
    float Price
);