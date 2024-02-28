namespace Veterinaria.Application.Dtos.Wrappers;

public class ResponseSucceded<T> : ResponseBase
{
    public T? Data { get; set; }
    public ResponseSucceded(int status, T data) : base(true, status)
    {
        Data = data;
    }
}