namespace Veterinaria.Domain.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
        public List<SaleDetail> SaleDetails { get; set; }
    }
}