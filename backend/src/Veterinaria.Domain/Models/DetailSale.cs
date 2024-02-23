namespace Veterinaria.Domain.Models
{
    public class DetailSale
    {
        public int Id { get; init; }
        public float SubTotal { get; set; }
        public int Quantity { get; set; }
        public int SaleId { get; set; }
        public Sale Sale { get; set; } = null!;
        public int ProductId { get; set; }
        public Product Product { get; set; } = null!;
    }
}