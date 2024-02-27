import { ProductoDestacados } from "../../Components/ProductosDestacados/ProductoDestacados"
import { Ofertas } from "../../Components/Ofertas/Ofertas";
import { CarouselBanner } from "../../Components/Carousel/CarouselBanner";
import { GrillaMarcas } from "../../Components/GrillaMarcas/GrillaMarcas" 
import { Testimonios } from "../../Components/Testimonios/Testimonios";
import { TestimonioPrueba } from "../../Components/Testimonios/TestimonioPrueba";

export const Home = () => {
  return (
    <>
      <Ofertas />
      <CarouselBanner />
      <ProductoDestacados />
      <GrillaMarcas />
      <Testimonios />
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
      <TestimonioPrueba/>
    </div>
    </>
  );
};

