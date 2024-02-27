

using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http.HttpResults;
using Veterinaria.Application.CustomeException;
using Veterinaria.Application.Dtos.Wrappers;

public class GlobalExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
    {
        (int statusCode, string errorMessage) = exception switch
        {
            ResourceNotFoundException => ((int)HttpStatusCode.NotFound, exception.Message),
            DBSaveChangesException => ((int)HttpStatusCode.InternalServerError, exception.Message),
            ConflictException => ((int)HttpStatusCode.Conflict, exception.Message),
            UnauthorizedException => ((int)HttpStatusCode.Unauthorized, exception.Message),
            BadException => ((int)HttpStatusCode.BadRequest, exception.Message),
            _ => ((int)HttpStatusCode.InternalServerError, "Something went wrong")
        };


        httpContext.Response.ContentType = "application/json";
        httpContext.Response.StatusCode = statusCode;
        ResponseUnsucceeded response = new ResponseUnsucceeded(statusCode, errorMessage, default);
        if (exception is BadException)
        {
            var ex = (BadException)exception;
            response.Errors = ex.Errors;
        }
        await httpContext.Response.WriteAsJsonAsync(response);

        return true;
    }
}