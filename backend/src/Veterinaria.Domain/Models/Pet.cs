using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Domain.Models
{
    public class Pet
    {
        public int Id { get; init; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Race { get; set; }
        public DateOnly Birthday { get; set; }
        public float Weight { get; set; }
        public string? Photo { get; set; }
        public string ClientUserId { get; set; }
        public ClientUser ClientUser { get; set; } = null!;
        public HashSet<Date> Dates { get; set; } = new HashSet<Date>();
        public HashSet<MedicalHistory> MedicalHistories { get; set; } = new HashSet<MedicalHistory>();
    }
}
