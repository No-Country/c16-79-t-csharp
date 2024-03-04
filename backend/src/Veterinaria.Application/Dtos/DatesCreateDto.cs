using Veterinaria.Domain.Models;

namespace Veterinaria.Application.Dtos;

public record DateCreateDto(
    DateTime Time,
    int ServiceId,
    int PetId
);