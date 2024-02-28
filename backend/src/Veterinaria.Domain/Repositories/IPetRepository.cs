using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories
{
    public interface IPetRepository : IBasicRepository<Pet, int>
    {
        public Task<List<Pet>> GetAllWithData();
        public Task<Pet> GetByIdWithData(Expression<Func<Pet, bool>> filtro = null);
    }
}
