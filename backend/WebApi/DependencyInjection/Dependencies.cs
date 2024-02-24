using Microsoft.EntityFrameworkCore;
using Veterinaria.Application.Services;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;
using Veterinaria.Infrastructure;
using Veterinaria.Infrastructure.AuthModels;
using Veterinaria.Infrastructure.Persistance.Context;
using Veterinaria.Infrastructure.Repository;

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

        services.AddTransient(typeof(IBasicRepository<,>), typeof(BasicRepository<,>));

        services.AddScoped<IDateRepository, DateRepository>();
        services.AddScoped<IMedicalHistoryRepository, MedicalHistoryRepository>();
        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<ISaleRepository, SaleRepository>();
        services.AddScoped<IServiceRepository, ServiceRepository>();

        return services;
    }

    public static IServiceCollection AddDependencyUtilities(this IServiceCollection services, IConfiguration configuration)
    {
        //services.AddAutoMapper(typeof()); // agregar Automapper
        return services;
    }

    public static IServiceCollection AddDependencyApplication(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IDateServise, DateService>();
        services.AddScoped<IMedicalHistoryService, MedicalHistoryService>();
        services.AddScoped<IProductService, ProductService>();
        services.AddScoped<ISaleService, SaleService>();
        services.AddScoped<IServiceService, ServiceService>();
        return services;
    }

}