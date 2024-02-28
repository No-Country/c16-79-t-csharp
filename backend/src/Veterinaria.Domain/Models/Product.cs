namespace Veterinaria.Domain.Models
{
    public class Product
    {
        public int Id { get; init; }
        public string? Name { get; set; }
        public float Price { get; set; }
        public int Stock { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public HashSet<Categorie> Categories { get; set; } = new HashSet<Categorie>();
        public HashSet<DetailSale> DetailSales { get; set; } = new HashSet<DetailSale>();

        private Product() { }
        public Product(string name, float price, int stock, string description, string image, HashSet<Categorie> categories, HashSet<DetailSale> detailSales)
        {
            Name = name;
            Price = price;
            Stock = stock;
            Description = description;
            Image = image;
            Categories = categories;
            DetailSales = detailSales;
        }

        public static Product CreateProduct(string name, float price, int stock, string description, string image)
        {
            var product = new Product() { Name = name, Price = price, Stock = stock, Description = description, Image = image };
            return product;
        }

        public void UpdatePrice(float newPrice)
        {
            if (newPrice < 0)
            {
                // TODO: manejar exception con uno personalizado
                throw new ArgumentException("The price can't be negative", nameof(newPrice));
            }
            Price = newPrice;
        }
    }
}