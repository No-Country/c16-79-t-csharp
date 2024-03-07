export const GrillaMarcas = () => {
  const marcas = [
    {
      title: "Royal Canin",
      img: "https://traviesospetshop.com.ar/wp-content/uploads/2023/05/Royal-Canin-150x150.png",
    },
    {
      title: "Vital can",
      img: "https://traviesospetshop.com.ar/wp-content/uploads/2023/05/Vital-can-500x500-1-150x150.png",
    },
    {
      title: "Eukanuba",
      img: "https://traviesospetshop.com.ar/wp-content/uploads/2023/05/Eukanuba-logo-slider-150x150.png",
    },
    {
      title: "Excellent",
      img: "https://traviesospetshop.com.ar/wp-content/uploads/2023/05/Purina-Excellent-150x150.png",
    },
    {
      title: "Kong",
      img: "https://puppis.vteximg.com.br/arquivos/ids/163038/Kong%20150x150.png?v=636613804126300000",
    },
    {
      title: "Old price",
      img: "https://puppis.vteximg.com.br/arquivos/ids/176336/Old%20Prince%20150x150_1.png?v=637535916472600000",
    },
    {
      title: "Proplan",
      img: "https://live.staticflickr.com/2949/34009279265_6a3863d4fb_h.jpg",
    },
    {
      title: "Pawise",
      img: "https://puppis.vteximg.com.br/arquivos/ids/185679/pawise-logo-marcas.png?v=637830354377100000",
    },
  ];

  return (
    <div className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container mx-auto py-10 px-8 max-w-6xl ">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-center text-gray-600 md:text-5xl lg:text-4xl dark:text-white">
          Marcas recomendadas
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0">
          {marcas.map((marca) => {
            return (
              <div key={marca.title} className="self-center">
                <img className="mx-auto max-h-36" src={marca.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
