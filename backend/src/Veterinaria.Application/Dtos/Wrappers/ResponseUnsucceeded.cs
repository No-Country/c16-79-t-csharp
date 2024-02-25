namespace Veterinaria.Application.Dtos.Wrappers;

public class ResponseUnsucceeded : ResponseBase
{
    public string? Message { get; set; }
    public List<string>? Errors { get; set; }

    public ResponseUnsucceeded(int status, string? message, List<string>? errors) : base(false, status)
    {
        Message = message;
        Errors = errors;
    }
}