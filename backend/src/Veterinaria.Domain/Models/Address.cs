using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Domain.Models
{
    public class Address
    {
        public int Id { get; set; }
        public string? City { get; set; }
        public string? Province { get; set; }
        public string? Neighborhood { get; set; }
        public string? Street { get; set; }
        public int Number { get; set; }
        public string? ClientUserId { get; set; }
        public ClientUser ClientUser { get; set; } = null!;
    }
}
