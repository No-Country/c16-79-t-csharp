using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Application.DTO
{
    public class UserAccountResponseLoginDTO
    {
        public ClientUserDTO ClientUser { get; set; } = null!;
        public string Token { get; set; }
    }
}
