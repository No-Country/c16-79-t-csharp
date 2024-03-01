using Veterinaria.Domain.Models;

namespace Veterinaria.Application.Dtos
{
    public record DetailSaleDto(
        int Id,
        float SubTotal,
        int Quantity,
        int SaleId,
        int ProductId,
        SaleDto Sale,
        ProductDto Product
    );
}