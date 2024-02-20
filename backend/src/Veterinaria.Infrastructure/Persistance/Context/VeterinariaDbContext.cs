using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Veterinaria.Domain.Models;
using Veterinaria.Infrastructure.AuthModels;

namespace Veterinaria.Infrastructure.Persistance.Context;

public class VeterinariaDbContext : IdentityDbContext<ApplicationUserAccount>
{
    public virtual DbSet<Address> Addresses { get; set; }
    public virtual DbSet<Categorie> Categories { get; set; }
    public virtual DbSet<ClientUser> ClientUsers { get; set; }
    public virtual DbSet<Date> Dates { get; set; }
    public virtual DbSet<DetailSale> DetailSales { get; set; }
    public virtual DbSet<MedicalHistory> MedicalHistories { get; set; }
    public virtual DbSet<Pet> Pets { get; set; }
    public virtual DbSet<Product> Products { get; set; }
    public virtual DbSet<Sale> Sales { get; set; }
    public virtual DbSet<Service> Services { get; set; }
    public VeterinariaDbContext()
    { }

    public VeterinariaDbContext(DbContextOptions<VeterinariaDbContext> options) : base(options)
    { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        //TODO: arreglar :warning
        //optionsBuilder.UseNpgsql("Host=localhost;Username=postgres;Port=5456;Password=password;Database=veterinaria");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ClientUser>(e =>
        {
            e.HasOne<ApplicationUserAccount>().WithMany(o => o.ClientUsers).HasForeignKey(e => e.UserAccountId
            );
            e.Property(e => e.UserAccountId).IsRequired();
            e.HasIndex(e => e.UserAccountId).IsUnique();
        });
        base.OnModelCreating(modelBuilder);
    }
}