import { ProductoDestacados } from "../../Components/ProductosDestacados/ProductoDestacados"
import { Ofertas } from "../../Components/Ofertas/Ofertas";
import { CarouselBanner } from "../../Components/Carousel/CarouselBanner";
import { GrillaMarcas } from "../../Components/GrillaMarcas/GrillaMarcas" 
import { Testimonios } from "../../Components/Testimonios/Testimonios";

export const Home = () => {
  return (
    <>
      <Ofertas />
      <CarouselBanner />
      <ProductoDestacados />
      <GrillaMarcas />
      <Testimonios />
    </>
  );
};

