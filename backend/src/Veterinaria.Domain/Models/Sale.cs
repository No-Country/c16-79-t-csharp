namespace Veterinaria.Domain.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public float Total { get; set; }
        public int ClientUserId { get; set; }
        public ClientUser ClientUser { get; set; } = null!;
        public HashSet<DetailSale> SaleDetails { get; set; } = new HashSet<DetailSale>();
    }
}