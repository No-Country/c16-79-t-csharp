using Microsoft.EntityFrameworkCore;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Repositories;
public class MedicalHistoryRepository : BasicRepository<MedicalHistory, int>, IMedicalHistoryRepository
{
    private readonly VeterinariaDbContext _context;
    public MedicalHistoryRepository(VeterinariaDbContext context) : base(context)
    {
        _context = context;
    }

    public Task MetodoPersonalizadoAsync(MedicalHistory model)
    {
        //TODO : implementacion de metodo personalizado.
        throw new NotImplementedException();
    }

    public override async Task<List<MedicalHistory>> FindAllAsync()
    {
        return await _context.MedicalHistories.Include(mh => mh.Pet).ToListAsync();
    }

}

