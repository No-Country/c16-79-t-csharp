
using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Services
{
    public interface IMedicalHistoryService
    {

        Task<MedicalHistory> GetByIdAsync(int id);
        Task<List<MedicalHistory>> GetAllAsync();
        Task<MedicalHistory> CreateAsync(string type, string description, float price);
        Task<MedicalHistory> UpdateAsync(int id, string type, string description, float price);
        Task DeleteAsync(int id);

       // Task ExampleFunction();
    }
}
