namespace Veterinaria.Domain.Models;

public class MedicalHistory
{
     public int Id{ get ; init; }
     public string? Diagnostic { get ; set; }
     public string? Medic { get ; set; }
     public DateTime Time { get ; set; }
     public int PetId { get ; set; }
     public Pet Pet { get; set; } = null!;
}