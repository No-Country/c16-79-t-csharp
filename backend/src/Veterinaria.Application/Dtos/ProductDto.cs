namespace Veterinaria.Application.Dtos
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public int Stock { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public List<CategorieDto> Categories { get; set; }
    }
}