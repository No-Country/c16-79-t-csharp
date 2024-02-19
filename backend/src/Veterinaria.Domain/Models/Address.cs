using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Domain.Models
{
    public class Address
    {
        public int Id { get; init; }
        public string? City { get; private set; }
        public string? Province { get; private set; }
        public string? Neighborhood { get; private set; }
        public string? Street { get; private set; }
        public int Number { get; private set; }
        public int ClientUserId { get; private set; }
        public ClientUser ClientUser { get; private set; } = null!;
    }
}
