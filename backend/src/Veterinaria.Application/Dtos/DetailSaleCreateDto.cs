namespace Veterinaria.Application.Dtos
{
    public record DetailSaleCreateDto(
        int Quantity,
        float SubTotal,
        int SaleId,
        int ProductId
    );
}