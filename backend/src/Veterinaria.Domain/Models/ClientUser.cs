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
        public string Name { get; private set; }
        public string LastName { get; private set; }
        public HashSet<Pet> Pets { get; private set; } = new HashSet<Pet>();
        public HashSet<Address> Addresses { get; private set; } = new HashSet<Address>();
        public HashSet<Sale> Sales { get; private set; } = new HashSet<Sale>();
    }
}
