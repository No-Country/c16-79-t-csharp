
namespace Veterinaria.Infrastructure.Repositories;

public interface IUnitOfWork
{
    Task BeginTransaction();
    Task SavedAsync();
}