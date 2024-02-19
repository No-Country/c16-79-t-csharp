namespace Veterinaria.Domain.Models
{
    public class DetailSale
    {
        public int Id { get; set; }
        public float SubTotal { get; set; }
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; } = null!;
    }
}