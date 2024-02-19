namespace Veterinaria.Domain.Models
{
    public class Categorie
    {
        public int Id { get; init; }
        public string Name { get; private set; }
        public HashSet<Product> Products { get; private set; } = new HashSet<Product>();
    }
}
