using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories;

public interface IMedicalHistoryRepository : IBasicRepository<MedicalHistory, int>
{
    Task MetodoPersonalizadoAsync(MedicalHistory model);
}