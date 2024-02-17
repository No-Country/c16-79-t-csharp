namespace Veterinaria.Domain.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int ClientId { get; set; }
        public ClientUser Client { get; set; }
        public List<DetailSale> SaleDetails { get; set; }
    }
}