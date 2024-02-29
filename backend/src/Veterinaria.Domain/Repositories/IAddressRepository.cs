using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories
{
    public interface IAddressRepository : IBasicRepository<Address, int>
    {
        public Task<List<Address>> GetAllWithData();
        public Task<Address> GetByIdWithData(Expression<Func<Address, bool>> filtro = null);
    }
}
