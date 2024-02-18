﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veterinaria.Domain.Models
{
    public class Pet
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Type { get; set; }
        public string? Race { get; set; }
        public DateOnly FechaNacimiento { get; set; }
        public float Weight { get; set; }
        public string? Photo { get; set; }
        public string? ClientUserId { get; set; }
        public ClientUser ClientUser { get; set; } = null!;
        public string? DateId { get; set; }
        public Date Date { get; set; } = null!;
        public HashSet<MedicalHistory> MedicalHistories { get; set; } = new HashSet<MedicalHistory>();
    }
}