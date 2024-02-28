namespace Veterinaria.Domain.Models
{
    public class Categorie
    {
        public int Id { get; init; }
        public string Name { get; private set; }
        public HashSet<Product> Products { get; private set; } = new HashSet<Product>();

        public Categorie() { }

        public Categorie(int id, string name, HashSet<Product> products)
        {
            Id = id;
            Name = name;
            Products = products;
        }
        public static Categorie Create(string name)
        {
            return new Categorie()
            {
                Name = name
            };
        }
        public void UpdateName(string name)
        {
            Name = name;
        }
    }

}
