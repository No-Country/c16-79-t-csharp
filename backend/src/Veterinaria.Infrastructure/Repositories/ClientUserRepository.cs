using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Veterinaria.Domain.Models;
using Veterinaria.Domain.Repositories;
using Veterinaria.Infrastructure.Persistance.Context;

namespace Veterinaria.Infrastructure.Repositories
{
    public class ClientUserRepository : BasicRepository<ClientUser, string>, IClientUserRepository
    {
        private readonly VeterinariaDbContext _context;
        public ClientUserRepository(VeterinariaDbContext context) : base(context)
        {
            _context = context;
        }

        virtual public async Task<List<ClientUser>> GetAllClientUserWithData()
        {
            var users = await _context.ClientUsers.Include(u => u.Addresses)
                                      .Include(u => u.Pets)
                                      //                              .ThenInlcude(p => p.MedicalHistories)
                                      .ToListAsync();
            return users;
        }
        virtual public async Task<ClientUser> GetClientUserByIdWithData(Expression<Func<ClientUser, bool>> filtro = null!)
        {
            var user = await _context.ClientUsers.Include(u => u.Addresses)
                                           .Include(u => u.Pets)
                                           //                                   .ThenInlcude(p => p.MedicalHistories)
                                           .FirstOrDefaultAsync(filtro);
            return user;
        }

        virtual public async Task<ClientUser> GetClientUserById(Expression<Func<ClientUser, bool>> filtro = null!)
        {
            var user = await _context.ClientUsers.FirstOrDefaultAsync(filtro);
            return user;
        }

        public async Task<ClientUser?> FindByUserAccount(string idUserAccount)
        {
            var user = await _context.ClientUsers.FirstOrDefaultAsync(u => u.UserAccountId==idUserAccount);
            return user;
        }
    }
}
