
namespace Veterinaria.Application.CustomeException;

public class BadException : Exception
{
    public List<string> Errors { get; set; } = new List<string>();
    public BadException() { }
    public BadException(string message) : base(message) { }
    public BadException(string message, List<string> errors) : base(message)
    {
        Errors = errors;
    }
    public BadException(string message, Exception inner) : base(message, inner) { }
    public BadException(string message, List<string> errors, Exception inner) : base(message, inner)
    {
        Errors = errors;
    }

}