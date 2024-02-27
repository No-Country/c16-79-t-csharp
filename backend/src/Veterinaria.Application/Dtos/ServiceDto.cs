using Veterinaria.Domain.Models;
namespace Veterinaria.Application.Dtos;

public record ServiceDto(
    int Id,
    string Type,
    string Description,
    float Price,
    HashSet<Date> Dates 
);

