using System.Runtime.CompilerServices;

namespace Veterinaria.Application.CustomeException;

public class ResourceNotFoundException : Exception
{
    public ResourceNotFoundException() { }
    public ResourceNotFoundException(string message) : base(message) { }
    public ResourceNotFoundException(string message, Exception inner) : base(message, inner) { }
    public static ResourceNotFoundException NotFoundById<TModel, TypeId>(TModel model, TypeId id) where TModel : class
    {
        return new ResourceNotFoundException($"The {nameof(TModel)} with ID {id} was not found.");
    }
}