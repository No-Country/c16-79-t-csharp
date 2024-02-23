
using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services
{
    public interface IMedicalHistoryService
    {

        Task<MedicalHistory> GetByIdAsync(int id);
        Task<List<MedicalHistory>> GetAllAsync();
        Task<MedicalHistory> CreateAsync(string diagnostic, string medic, DateTime time, int petId);
        Task<MedicalHistory> UpdateAsync(int id, string diagnostic, string medic, DateTime time, int petId);
        Task DeleteAsync(int id);

       // Task ExampleFunction();
    }
}
