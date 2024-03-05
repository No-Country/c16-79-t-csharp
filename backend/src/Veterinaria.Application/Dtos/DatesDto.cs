using Veterinaria.Domain.Models;

namespace Veterinaria.Application.Dtos;

public record DateDto(
    int Id,
    DateTime Time,
    int ServiceId ,
    int PetId ,
    DateState StateDate,
    string StateName=""
);

