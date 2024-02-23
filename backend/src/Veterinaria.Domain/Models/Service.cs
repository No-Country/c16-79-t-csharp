using System;
using System.Security.Cryptography;

namespace Veterinaria.Domain.Models;

public class   Service
{
     public int Id{ get ; init; }
     public string? Type { get ;set; }
     public string? Description{ get ;set; }
     public float Price{ get ;set; }
     public HashSet<Date> Dates { get ;set; } = new HashSet<Date>();

    private Service() { }

    public Service(int id, string type, string description, float price, HashSet<Date> dates)
    {
        Id = id;
        Type = type;
        Description = description;
        Price = price;
        Dates = dates;

    }
    public static Service Create(string type, string description, float price, HashSet<Date> dates)
    {
        return new Service()
        {
            Type = type,
            Description = description,
            Price = price,
            Dates = dates
        };
    }

    public void UpdateModel(string type, string description, float price, HashSet<Date> dates)
    {
       
        Type = type;
        Description = description;
        Price = price;
        Dates = dates;
    }
}