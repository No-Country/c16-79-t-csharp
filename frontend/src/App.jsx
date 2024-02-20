import "./App.css";
import NavBar from "./Common/NavBar";
import { FooterComponent } from "./Common/FooterComponent";
import { CarouselBanner } from "./Components/Carousel/CarouselBanner";import CarrouselMarcas from './Components/CarrouselMarcas/CarrouselMarcas'
import Testimonios from "./Components/Testimonios/Testimonios";

function App() {

  return (
    <>
      <NavBar />
      <CarouselBanner/>
      <CarrouselMarcas/>
      <Testimonios/>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
