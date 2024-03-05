using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Application.Dtos
{
    public class PetDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Race { get; set; }
        public string Birthday { get; set; }
        public float Weight { get; set; }
        public string Photo { get; set; }
        public int Age { get; set; }
    }
}
