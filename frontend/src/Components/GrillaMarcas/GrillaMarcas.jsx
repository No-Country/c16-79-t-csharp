import { Carousel } from "flowbite-react";

export const GrillaMarcas = () => {

    const marcas = [
        {
          title: "Royal Canin",
          img: "https://puppis.vteximg.com.br/arquivos/ids/163028/Royal%20Canin%20150x150.png?v=636613090416470000",
        },
        {
          title: "Vital can",
          img: "https://puppis.vteximg.com.br/arquivos/ids/163030/VitalCan%20150x150.png?v=636613090441530000",
        },
        {
          title: "Eukanuba",
          img: "https://puppis.vteximg.com.br/arquivos/ids/163020/Eukanuba%20150x150.png?v=636764384009700000",
        },
        {
          title: "Royal Canin",
          img: "https://puppis.vteximg.com.br/arquivos/ids/163021/Excellent%20150x150.png?v=636613090346730000",
        },
        {
          title: "Excellent",
          img: "https://puppis.vteximg.com.br/arquivos/ids/163028/Royal%20Canin%20150x150.png?v=636613090416470000",
        },
        {
          title: "Old price",
          img: "https://puppis.vteximg.com.br/arquivos/ids/176336/Old%20Prince%20150x150_1.png?v=637535916472600000",
        },
        {
          title: "Proplan",
          img: "https://puppis.vteximg.com.br/arquivos/ids/191410/Web_LogoPurinaPloplan_OUT-1.png?v=638107735093430000",
        },
        {
          title: "Pawise",
          img: "https://puppis.vteximg.com.br/arquivos/ids/185679/pawise-logo-marcas.png?v=637830354377100000",
        },
      ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log("onSlideChange()", index)}>
    
        {marcas.map((marca) => {
          return (
            <>
              <div id={marca.title} className="">
                <img src={marca.img}/>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

