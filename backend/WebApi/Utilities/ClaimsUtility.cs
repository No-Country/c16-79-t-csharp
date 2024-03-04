
using System.Security.Claims;
using Microsoft.AspNetCore.SignalR;
using Veterinaria.Application.CustomeException;

namespace WebApi.Utilities;

public static class ClaimsUtility
{
    public static int GetClienteIdFromClaim(ClaimsPrincipal claims)
    {
        var claimUserId = claims.FindFirst(u => u.Type == "ClientUserId")?.Value;

        if (string.IsNullOrEmpty(claimUserId) || !int.TryParse(claimUserId, out int clientUserId))
        {
            throw new UnauthorizedException("No se puede obtener el ClientUserId.");
        }

        return clientUserId;
    }
}