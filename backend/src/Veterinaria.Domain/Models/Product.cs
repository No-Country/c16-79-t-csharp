namespace Veterinaria.Domain.Models
{
    public class Product
    {
        public int Id { get; init; }
        public string Name { get; set; }
        public float Price { get; set; }
        public int Stock { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public HashSet<Categorie> Categories { get; set; } = new HashSet<Categorie>();
        public HashSet<DetailSale> DetailSales { get; set; } = new HashSet<DetailSale>();
    }
}