namespace Veterinaria.Application.CustomeException;

public class DBSaveChangesException : Exception
{
    public DBSaveChangesException() { }
    public DBSaveChangesException(string message) : base(message) { }
    public DBSaveChangesException(string message, Exception inner) : base(message, inner) { }
}