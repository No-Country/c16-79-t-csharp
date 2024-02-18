namespace Veterinaria.Domain.Models;
public class MockModel
{
    public int Id { get; init; }
    public string Attributo1 { get; private set; }
    public int Attributo2 { get; private set; }
    public DateTime CreationDate { get; private set; }

    private MockModel() { }

    public MockModel(int id, string attributo1, int attributo2, DateTime creationDate)
    {
        Id = id;
        Attributo1 = attributo1;
        Attributo2 = attributo2;
        CreationDate = creationDate;
    }
    public static MockModel Create(string attributo1, int attributo2)
    {
        return new MockModel()
        {
            Attributo1 = attributo1,
            Attributo2 = attributo2,
            CreationDate = DateTime.Now
        };
    }

    public void UpdateModel(string attribute1, int attribute2)
    {
        Attributo1 = attribute1;
        Attributo2 = attribute2;
    }
}