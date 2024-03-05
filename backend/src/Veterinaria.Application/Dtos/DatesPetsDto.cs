using Veterinaria.Domain.Models;

namespace Veterinaria.Application.Dtos;

public record DatePetDto(
    int Id,
    DateTime Time,
    int ServiceId ,
    string ServiceType,
    int PetId ,
    string PetName,
    DateState StateDate
);