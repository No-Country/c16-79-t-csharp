using Veterinaria.Domain.Models;

namespace Veterinaria.Application.Dtos;

public record MedicalHistoryPetDto(
    int Id,
    string? Diagnostic,
    string? Medic,
    DateTime Time,
    int PetId,
    string PetName
);