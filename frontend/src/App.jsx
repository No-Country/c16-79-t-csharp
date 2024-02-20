

import './App.css'
import NavBar from './Common/NavBar'
import { FooterComponent } from './Common/FooterComponent'
import ProductoDestacados from './Components/ProductosDestacados/ProductoDestacados'
import Ofertas from './Components/Ofertas/Ofertas'
import { CarouselBanner } from "./Components/Carousel/CarouselBanner";import CarrouselMarcas from './Components/CarrouselMarcas/CarrouselMarcas'



function App() {

  return (
    <>
      <NavBar />
      <Ofertas/>
      <CarouselBanner/>
      <ProductoDestacados />
      <CarrouselMarcas/>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
