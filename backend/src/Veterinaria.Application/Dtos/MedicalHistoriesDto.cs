using Veterinaria.Domain.Models;

namespace Veterinaria.Application.Dtos;

public record MedicalHistoriesDto(
    int Id,
    string? Diagnostic,
    string? Medic,
    DateTime Time,
    int PetId
);