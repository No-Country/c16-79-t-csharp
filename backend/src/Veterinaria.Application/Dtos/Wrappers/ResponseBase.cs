namespace Veterinaria.Application.Dtos.Wrappers;

public class ResponseBase
{
    public bool Succeded { get; set; }
    public int Status { get; set; }

    public ResponseBase(bool succeded, int status)
    {
        Succeded = succeded;
        Status = status;
    }
}