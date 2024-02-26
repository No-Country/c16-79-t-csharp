using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Application.DTO
{
    public class ClientUserDTO
    {
        public string? UserAccountId { get; set; }
        public string? UserName { get; set; }
        public string? Name { get; set; }
        public string? LastName { get; set; }
        public string? PhoneNumber { get; set; }
        public HashSet<PetDTO> Pets { get; set; } = new HashSet<PetDTO>();
        public HashSet<AddressDTO> Addresses { get; set; } = new HashSet<AddressDTO>();
    }
}
