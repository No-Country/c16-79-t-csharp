using Microsoft.EntityFrameworkCore;
using Veterinaria.Infrastructure.AuthModels;
using Veterinaria.Infrastructure.Persistance.Context;

namespace WebApi.DependencyInjection;
public static class Dependencies
{
    public static IServiceCollection AddDependencyInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<VeterinariaDbContext>(option =>
        {
            option.UseNpgsql(configuration.GetConnectionString("DefaultConnection"));
        });
        services.AddIdentityApiEndpoints<ApplicationUserAccount>()
            .AddEntityFrameworkStores<VeterinariaDbContext>();

        return services;
    }
}