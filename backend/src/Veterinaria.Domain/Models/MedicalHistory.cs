using System;

namespace Veterinaria.Domain.Models;

public class MedicalHistory
{
     public int Id{ get ; init; }
     public string? Diagnostic { get ; set; }
     public string? Medic { get ; set; }
     public DateTime Time { get ; set; } //hora del informe
     public int PetId { get ; set; }
     public Pet Pet { get; set; } = null!;

    private MedicalHistory() { }
  

    public MedicalHistory (int id, string diagnostic, string medic, DateTime time, int petId,Pet pet)
    {
        Id = id;
        Diagnostic = diagnostic;
        Medic = medic;
        Time = time;
        PetId = petId;
        Pet = pet;
    }
    public static MedicalHistory Create(string diagnostic, string medic, DateTime time, int petId)
    {
        return new MedicalHistory()
        {
            Diagnostic = diagnostic,
            Medic = medic,
            Time = time,
            PetId = petId
            //Pet = Pet.GetByID(petId))
        };
    }
    public void UpdateModel(string diagnostic, string medic, DateTime time, int petId)
    {
        Diagnostic = diagnostic;
        Medic = medic;
        Time = time; 
        PetId = petId;
        // Pet = Pet.GetByID(petId))
    }
}