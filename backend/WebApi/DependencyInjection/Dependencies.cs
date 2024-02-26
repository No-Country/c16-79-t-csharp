using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Veterinaria.Application.Services;
using Veterinaria.Domain.Repositories;
using Veterinaria.Domain.Services;
using Veterinaria.Infrastructure;
using Veterinaria.Infrastructure.Persistance.Context;
using Veterinaria.Infrastructure.Repositories;
using Veterinaria.Infrastructure.Authentication;
using Veterinaria.Application.Authentication;
using WebApi.Utilities;
using Veterinaria.Infrastructure.Repository;
using Veterinaria.Infrastructure.AuthModels;

namespace WebApi.DependencyInjection;
public static class Dependencies
{
    public static IServiceCollection AddDependencyInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<VeterinariaDbContext>(option =>
        {
            option.UseNpgsql(configuration.GetConnectionString("DefaultConnection"));
        });

        services.AddIdentity<ApplicationUserAccount, IdentityRole>().AddEntityFrameworkStores<VeterinariaDbContext>();

        services.AddTransient(typeof(IBasicRepository<,>), typeof(BasicRepository<,>));

        services.AddScoped<IDateRepository, DateRepository>();
        services.AddScoped<IMedicalHistoryRepository, MedicalHistoryRepository>();
        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<ISaleRepository, SaleRepository>();
        services.AddScoped<IServiceRepository, ServiceRepository>();
        services.AddScoped<ICategorieRepository, CategorieRepository>();
        services.AddScoped<IPetRepository, PetRepository>();
        services.AddScoped<IClientUserRepository, ClientUserRepository>();
        services.AddScoped<IAuthenticationUserAccountService, AuthenticationUserAccountService>();
        services.AddScoped<IAddressRepository, AddressRepository>();

        return services;
    }


    public static IServiceCollection AddDependencyApplication(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IDateServise, DateService>();
        services.AddScoped<IMedicalHistoryService, MedicalHistoryService>();
        services.AddScoped<IProductService, ProductService>();
        services.AddScoped<ISaleService, SaleService>();
        services.AddScoped<IServiceService, ServiceService>();
        services.AddScoped<ICategorieService, CategorieService>();
        services.AddScoped<IPetRepository, PetRepository>();
        services.AddScoped<IClientUserRepository, ClientUserRepository>();
        services.AddScoped<IAuthenticationUserAccountService, AuthenticationUserAccountService>();
        services.AddScoped<IAddressRepository, AddressRepository>();
        return services;
    }

    public static IServiceCollection AddDependencyUtilities(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddAutoMapper(typeof(AutomapperProfile));
        return services;
    }

}
