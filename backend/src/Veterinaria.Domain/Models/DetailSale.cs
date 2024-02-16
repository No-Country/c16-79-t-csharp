namespace Veterinaria.Domain.Models
{
    public class DetailSale
    {
        public int IdDetailSale { get; set; }
        public int SubTotal { get; set; }
        public Product Product { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}