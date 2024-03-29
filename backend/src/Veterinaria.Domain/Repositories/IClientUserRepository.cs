﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Veterinaria.Domain.Models;

namespace Veterinaria.Domain.Repositories
{
    public interface IClientUserRepository : IBasicRepository<ClientUser, string>
    {
        public Task<List<ClientUser>> GetAllClientUserWithData();
        public Task<ClientUser> GetClientUserByIdWithData(Expression<Func<ClientUser, bool>> filtro = null!);
        public Task<ClientUser> GetClientUserById(Expression<Func<ClientUser, bool>> filtro = null!);
        Task<ClientUser?> FindByUserAccount(string idUserAccount);
    }
}
