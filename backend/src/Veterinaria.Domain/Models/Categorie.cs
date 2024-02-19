namespace Veterinaria.Domain.Models
{
    public class Categorie
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public HashSet<Categorie> Categorias { get; set; } = new HashSet<Categorie>();
    }
}
