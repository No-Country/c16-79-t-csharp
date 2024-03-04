using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Application.Dtos
{
    public class ClientUserDTO
    {
        public int Id { get; set; }
        public string? UserAccountId { get; set; }
        public string? UserName { get; set; }
        public string? Name { get; set; }
        public string? LastName { get; set; }
        public string? PhoneNumber { get; set; }
        public HashSet<AddressDTO> Addresses { get; set; } = new HashSet<AddressDTO>();
    }
}
