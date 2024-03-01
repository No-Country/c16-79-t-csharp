namespace Veterinaria.Application.Dtos
{
    public class SaleUpdateDto
    {
        public DateTime Date { get; set; }
        public float Total { get; set; }
        public int ClientUserId { get; set; }
    }
}