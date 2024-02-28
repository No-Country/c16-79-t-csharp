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
    public class AddressRepository : BasicRepository<Address, int>, IAddressRepository
    {
        private readonly VeterinariaDbContext _context;

        public AddressRepository(VeterinariaDbContext context) : base(context)
        {
            _context = context;
        }
        virtual public async Task<List<Address>> GetAllWithData()
        {
            var addresses = await _context.Addresses.Include(c => c.ClientUser).ToListAsync();
            return addresses;
        }

        virtual public async Task<Address> GetByIdWithData(Expression<Func<Address, bool>> filtro = null!)
        {
            var address = await _context.Addresses.Include(a => a.ClientUser).FirstOrDefaultAsync(filtro);
            return address;
        }
    }
}
