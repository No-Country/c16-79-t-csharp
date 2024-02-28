using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Repositories
{
    public class PetRepository : BasicRepository<Pet, int>, IPetRepository
    {
        private readonly VeterinariaDbContext _context;
        public PetRepository(VeterinariaDbContext context) : base(context)
        {
            _context = context;
        }

        virtual public IQueryable<Pet> GetAllWithData()
        {
            var pets = _context.Pets.Include(c => c.ClientUser).ToList().AsQueryable();
            return pets;
        }

        virtual public async Task<Pet> GetByIdWithData(Expression<Func<Pet, bool>> filtro = null)
        {
            var pet = await _context.Pets.Include(c => c.ClientUser).FirstOrDefaultAsync(filtro);
            return pet;
        }
    }
}
