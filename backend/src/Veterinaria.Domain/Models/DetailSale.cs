namespace Veterinaria.Domain.Models
{
    public class DetailSale
    {
        public int Id { get; init; }
        public float SubTotal => CalculateSubTotal();
        public int Quantity { get; set; }
        public int SaleId { get; set; }
        public Sale Sale { get; set; } = null!;
        public int ProductId { get; set; }
        public Product Product { get; set; } = null!;

        public DetailSale() { }

        public DetailSale(int id, int quantity, int saleId, Sale sale, int productId, Product product)
        {
            Id = id;
            Quantity = quantity;
            SaleId = saleId;
            Sale = sale;
            ProductId = productId;
            Product = product;
        }

        public static DetailSale CreateDetailSale(int quantity, int saleId, int productId, Product product)
        {
            var detailSale = new DetailSale()
            {
                Quantity = quantity,
                SaleId = saleId,
                ProductId = productId,
                Product = product
            };
            return detailSale;
        }

        public float CalculateSubTotal()
        {
            return Quantity * Product.Price;
        }

    }
}