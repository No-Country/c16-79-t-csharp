

import './App.css'
import NavBar from './Common/NavBar'
import { FooterComponent } from './Common/FooterComponent'
import ProductoDestacados from './Components/ProductosDestacados/ProductoDestacados'
import Ofertas from './Components/Ofertas/Ofertas'
import { CarouselBanner } from "./Components/Carousel/CarouselBanner";


function App() {
  return (
    <>
      <NavBar />
      <Ofertas/>
      <ProductoDestacados />
      <CarouselBanner></CarouselBanner>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
