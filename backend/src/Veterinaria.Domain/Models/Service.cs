namespace Veterinaria.Domain.Models;

public class   Service
{
     public int Id{ get ; init; }
     public string Type { get ;set; }
     public string? Description{ get ;set; }
     public float Price{ get ;set; }
     public HashSet<Date> Dates { get ;set; } = new HashSet<Date>();
}