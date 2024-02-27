namespace Veterinaria.Application.Dtos
{
    public record DetailSaleUpdateDto(
        int Id,
        int Quantity,
        float SubTotal,
        int SaleId,
        int ProductId
    );
}