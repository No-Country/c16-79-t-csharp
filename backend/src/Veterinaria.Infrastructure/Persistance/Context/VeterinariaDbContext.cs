using Microsoft.EntityFrameworkCore;

namespace Veterinaria.Infrastructure.Persistance.Context;

public class VeterinariaDbContext : DbContext
{
    public VeterinariaDbContext()
    { }

    public VeterinariaDbContext(DbContextOptions<VeterinariaDbContext> options) : base(options)
    { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}