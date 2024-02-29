using Veterinaria.Domain.Models;

namespace Veterinaria.Application.Dtos;

public record MedicalHistoriesCreatedDto(
    string? Diagnostic,
    string? Medic,
    DateTime Time,
    int PetId
);