using Veterinaria.Domain.Models;

namespace Veterinaria.Application.Dtos;

public record MedicalHistoriesCreatedDto(
    int Id,
    string? Diagnostic,
    string? Medic,
    DateTime Time,
    int PetId,
    Pet Pet
);