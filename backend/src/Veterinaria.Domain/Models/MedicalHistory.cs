
namespace Veterinaria.Models;

public class   MedicalHistory
{
     public long Id{ get ;set; }
     
     public string? Diagnostic { get ;set; }
     public string? Medic { get ;set; }
     public DateTime Time{ get ;set; }
     public long PetId{ get ;set; }


}