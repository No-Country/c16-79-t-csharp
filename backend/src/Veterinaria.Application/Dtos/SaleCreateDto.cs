namespace Veterinaria.Application.Dtos
{
    public class SaleCreateDto
    {
        public DateTime Date { get; set; }
        public float Total { get; set; }
        public int ClientUserId { get; set; }
    }
}