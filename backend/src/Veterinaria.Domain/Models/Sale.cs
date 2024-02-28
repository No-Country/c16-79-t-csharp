using System.Numerics;

namespace Veterinaria.Domain.Models
{
    public class Sale
    {
        public int Id { get; init; }
        public DateTime Date { get; set; }
        public float Total { get; set; }
        public int ClientUserId { get; set; }
        public ClientUser ClientUser { get; set; } = null!;
        public HashSet<DetailSale> DetailSales { get; set; } = new HashSet<DetailSale>();


        private Sale(DateTime date, float total, int clientUserId)
        {
            Date = date;
            Total = total;
            ClientUserId = clientUserId;
        }


        public static Sale MakeSale(DateTime date, float total, int clientUserId)
        {
            var sale = new Sale(date, total, clientUserId);
            return sale;
        }
    }
}