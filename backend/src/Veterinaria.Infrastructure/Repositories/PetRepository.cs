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

        public async Task<List<Pet>> FindAllByUserAccount(string idUserAccount)
        {
            var pets = await _context.Pets.Include(c => c.ClientUser).Where(p => p.ClientUser.UserAccountId==idUserAccount).ToListAsync();
            return pets;
        }

        public async Task<List<Pet>> FindAllByUserId(int userId)
        {
            List<Pet> pets = await  _context.Pets.Where(p => p.ClientUserId == userId).ToListAsync();
            return pets;
        }

        virtual public async Task<List<Pet>> GetAllWithData()
        {
            var pets = await _context.Pets.Include(c => c.ClientUser).ToListAsync();
            return pets;
        }

        virtual public async Task<Pet> GetByIdWithData(Expression<Func<Pet, bool>> filtro = null!)
        {
            var pet = await _context.Pets.Include(c => c.ClientUser).FirstOrDefaultAsync(filtro);
            return pet;
        }
        
    }
}
