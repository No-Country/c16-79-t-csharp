using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Domain.Models
{
    public class ClientUser
    {
        public int Id { get; init; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string PhoneNumber { get; set; }
        public HashSet<Pet> Pets { get; set; } = new HashSet<Pet>();
        public HashSet<Address> Addresses { get; set; } = new HashSet<Address>();
        public HashSet<Sale> Sales { get; set; } = new HashSet<Sale>();
        public string UserAccountId { get; set; }
    }
}
