import "./App.css";
import NavBar from "./Common/NavBar";
import { FooterComponent } from "./Common/FooterComponent";
import { CarouselBanner } from "./Components/Carousel/CarouselBanner";import CarrouselMarcas from './Components/CarrouselMarcas/CarrouselMarcas'

function App() {

  return (
    <>
      <NavBar />
      <CarouselBanner/>
      <CarrouselMarcas/>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
