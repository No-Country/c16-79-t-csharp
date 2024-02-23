using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Domain.Repositories
{
    public interface IUserAccountService
    {
        public Task<bool> IsSingleUser(string userName);
        public Task<ClientUserResponseRegisterDTO> Register(ClientUserRegisterDTO clientUserRegisterDTO);
        public Task<ClientUserResponseLoginDTO> Login(ClientUserLoginDTO clientUserLoginDTO);
    }
}
