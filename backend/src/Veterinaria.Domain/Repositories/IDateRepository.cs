using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories;

public interface IMedicalHistory: IBasicRepository<MedicalHistory, int>
{
    Task MetodoPersonalizadoAsync(MedicalHistory model);
}