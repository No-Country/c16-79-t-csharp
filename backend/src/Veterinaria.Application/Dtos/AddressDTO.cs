using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Application.Dtos
{
    public class AddressDTO
    {
        public int Id { get; set; }
        public string? City { get; set; }
        public string? Province { get; set; }
        public string? Neighborhood { get; set; }
        public string? Street { get; set; }
        public int Number { get; set; }
    }
}
