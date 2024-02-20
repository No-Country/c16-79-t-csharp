namespace Veterinaria.Domain.Models;

public class Date
{
     public int Id { get ; init; }
     public DateTime Time { get ; set; }
     public int ServiceId { get ; set; }
     public Service Service { get; set; } = null!;
     public int PetId { get ; set; }
     public Pet Pet { get; set; } = null!;
     public DateState StateDate { get; set; }
}

public enum DateState
{
     Finished = 1,
     Canceled = 2,
     Crearted = 3
}