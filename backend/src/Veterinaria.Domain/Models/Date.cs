using System;

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
    
    private Date() { }

    public Date(int id, DateTime time, int serviceId, int petId)
    {
        Id = id;
        Time = time;
        ServiceId = serviceId;
        PetId = petId;
        StateDate = DateState.Crearted;
    }
    
    public static Date Create(DateTime time, int serviceId, int petId)
    {
        return new Date()
        {
            Time = time,
            ServiceId = serviceId,
            PetId = petId,
            StateDate = DateState.Crearted
        };
    }

    public void UpdateModel(DateTime time, int serviceId, int petId, DateState state)
    {
        Time = time;
        ServiceId = serviceId;
        PetId = petId;
        StateDate = state;
    }
    

}

public enum DateState
{
     Finished = 1,
     Canceled = 2,
     Crearted = 3
}