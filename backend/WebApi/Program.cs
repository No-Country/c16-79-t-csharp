using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Veterinaria.Infrastructure.AuthModels;
using Veterinaria.Infrastructure.Persistance.Context;
using WebApi.DependencyInjection;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddControllers();

builder.Services.AddDependencyInfrastructure(builder.Configuration);
builder.Services.AddDependencyApplication(builder.Configuration);
builder.Services.AddDependencyUtilities(builder.Configuration);

builder.Services.AddAuthorization();


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        Name = "Authorizarion",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "Token",
        In = ParameterLocation.Header,
        Description = "Token Authorization Header using Bearer Scheme"
    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement()
    {
        {
            new OpenApiSecurityScheme{
            Reference = new OpenApiReference{
                Type = ReferenceType.SecurityScheme,
                Id = "Bearer"
            }
        },
        new string[]{}
        }
    });
});

builder.Services.AddHealthChecks()
    .AddCheck("self", () => HealthCheckResult.Healthy())
    .AddDbContextCheck<VeterinariaDbContext>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CorsPolicy", builder =>
    {
        builder.AllowAnyOrigin();
        builder.AllowAnyMethod();
        builder.AllowAnyHeader();
    });
});

builder.Services.AddExceptionHandler<GlobalExceptionHandler>();

var app = builder.Build();

app.UseExceptionHandler(_ => { });

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    if (File.Exists("/.dockerenv") || Directory.Exists("/.docker"))
    {
        var portHost = app.Configuration["WEB_API_PORT_HOST"];
        Console.WriteLine($"--> Now listening on host machine: http://localhost:{portHost}");

        app.Urls.Add("http://0.0.0.0:5102");
        Console.WriteLine("-- Running inside Docker --");
    }
    Console.WriteLine($"-- Development Mode --");

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", (HttpContext context) =>
{
    var claims = context.User.Claims;
    foreach (var item in claims)
    {
        Console.WriteLine(item.ToString());
    }
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithOpenApi().RequireAuthorization();

app.MapIdentityApi<ApplicationUserAccount>();
app.MapSwagger();

app.MapHealthChecks("/hc", new HealthCheckOptions()
{
    Predicate = _ => true,
    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
});

app.MapControllers();

app.UseAuthentication();
app.UseAuthorization();

app.UseCors("CorsPolicy");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
