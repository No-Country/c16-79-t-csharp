using Microsoft.EntityFrameworkCore;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Repositories;
public class DateRepository : BasicRepository<Date, int>, IDateRepository
{
    private readonly VeterinariaDbContext _context;
    public DateRepository(VeterinariaDbContext context) : base(context)
    {
        _context = context;
    }

    public async Task<List<Date>> FindAllByClientUserAsync(int id)
    {
        List<Date> dates = await _context.Dates.Include( x => x.Pet).Where( y => y.Pet.ClientUserId== id).ToListAsync();
        return dates;
        
    }

    public Task MetodoPersonalizadoAsync(Date model)
    {
        //TODO : implementacion de metodo personalizado.
        throw new NotImplementedException();
    }
}
