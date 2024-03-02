using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Application.Dtos
{
    public class UserAccountResponseRegisterDTO // TODO: agreagar validaciones
    {
        public string Id { get; set; }
        public string Email { get; set; }
    }
}
