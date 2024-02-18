namespace Veterinaria.Domain.Models;
public class MockModel
{
    public int Id { get; init; }
    public string Atributo1 { get; private set; }
    public int Atributo2 { get; private set; }

    private MockModel() { }

    public MockModel(int id, string atributo1, int atributo2)
    {
        Id = id;
        Atributo1 = atributo1;
        Atributo2 = atributo2;
    }
    public static MockModel Create(string atributo1, int atributo2)
    {
        return new MockModel()
        {
            Atributo1 = atributo1,
            Atributo2 = atributo2
        };
    }
}