using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;
using Veterinaria.Infrastructure.Repository;

namespace Veterinaria.Infrastructure;
public class MedicalHistoryRepository : BasicRepository<MedicalHistory, int>, IMedicalHistoryRepository
{
    private readonly VeterinariaDbContext _context;
    public MedicalHistoryRepository (VeterinariaDbContext context) : base(context)
    {
        _context = context;
    }
    
    public Task MetodoPersonalizadoAsync(MedicalHistory model)
    {
        //TODO : implementacion de metodo personalizado.
        throw new NotImplementedException();
    }
    
}

