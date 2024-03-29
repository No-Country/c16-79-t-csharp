namespace Veterinaria.Application.Dtos
{
    public class ProductUpdateDto
    {
        public string Name { get; set; }
        public float Price { get; set; }
        public int Stock { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
    }
}