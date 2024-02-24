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

        private DetailSale(int quantity, int saleId, int productId)
        {
            Quantity = quantity;
            SaleId = saleId;
            ProductId = productId;
        }

        public static DetailSale CreateDetailSale(int quantity, int saleId, int productId)
        {
            var detailSale = new DetailSale(quantity, saleId, productId);
            return detailSale;   
        }

        public void Update(int quantity, int saleId, int productId)
        {
            Quantity = quantity;
            SaleId = saleId;
            ProductId = productId;
        }

        public float CalculateSubTotal()
        {
            return Quantity * Product.Price;
        }

    }
}