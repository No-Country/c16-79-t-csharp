using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Veterinaria.Application.DTO;

namespace Veterinaria.Application.Authentication
{
    public interface IAuthenticationUserAccountService
    {
        public Task<bool> IsSingleUser(string userName);
        public Task<UserAccountResponseRegisterDTO> Register(UserAccountRegisterDTO userAccountRegisterDTO);
        public Task<UserAccountResponseLoginDTO> Login(UserAccountLoginDTO userAccountLoginDTO);
        //public string TokenGenerator(IList<string> roles, ApplicationUserAccount userAccount);
    }
}
