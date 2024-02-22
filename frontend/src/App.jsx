

import './App.css'
import NavBar from './Common/NavBar'
import { FooterComponent } from './Common/FooterComponent'
import ProductoDestacados from './Components/ProductosDestacados/ProductoDestacados'
import Ofertas from './Components/Ofertas/Ofertas'
import { CarouselBanner } from "./Components/Carousel/CarouselBanner";
import CarrouselMarcas from './Components/CarrouselMarcas/CarrouselMarcas'
import Testimonios from "./Components/Testimonios/Testimonios";


function App() {
  return (
    <>
      <NavBar />
      <Router/> 
      <FooterComponent />
    </>
  );
}

export default App;
