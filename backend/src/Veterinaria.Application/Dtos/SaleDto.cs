namespace Veterinaria.Application.Dtos
{
    public class SaleDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public float Total { get; set; }
        public int ClientUserId { get; set; }
    }
}