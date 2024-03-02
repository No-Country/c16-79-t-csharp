using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Veterinaria.Infrastructure.Authentication;
public static class JwtGenerator
{
    public static string GenerateToken(ApplicationUserAccount userAccount ,int clientUserId, string roleUser, string secretKey)
    {

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(secretKey);

        var tokenInformation = new SecurityTokenDescriptor
        {
            //Se deben fijar el mismo valor que para ValidAudience y ValidIssuer puestos en program.cs
            //Issuer = ,
            //Audience = ,
            
            Subject = new ClaimsIdentity(new Claim[]
            {
                    new Claim(ClaimTypes.NameIdentifier, userAccount.Id.ToString()),
                    new Claim(ClaimTypes.Email, userAccount.Email.ToString()),
                    new Claim(ClaimTypes.Role, roleUser),
                    new Claim("ClientUserId",$"{clientUserId}")
            }),
            Expires = DateTime.UtcNow.AddDays(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var tokenCreated = tokenHandler.CreateToken(tokenInformation);

        return tokenHandler.WriteToken(tokenCreated);
    }
}