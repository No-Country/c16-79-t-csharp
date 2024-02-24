namespace Veterinaria.Domain.Models
{
    public class Categorie
    {
        public int Id { get; init; }
        public string Name { get; private set; }
        public HashSet<Product> Products { get; private set; } = new HashSet<Product>();

        private Categorie(string name)
        {
            Name = name;
        }

        public static Categorie CreateCategory(string name)
        {
            return new Categorie(name);
        }


        public void UpdateName(string newName)
        {
            if (string.IsNullOrWhiteSpace(newName))
            {
                throw new ArgumentException("The name can't be null or empty", nameof(newName));
            }

            Name = newName;
        }
    }
}
