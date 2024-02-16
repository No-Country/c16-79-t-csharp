namespace Veterinaria.Domain.Models;

public class Date
{
     public int Id { get ;set; }
     public DateTime Time { get ;set; }
     public int ServiseId { get ;set; }
     public Service Service { get; set; } = null!;
     public int PetId { get ;set; }
     public Pet Pet { get; set; } = null!;

}