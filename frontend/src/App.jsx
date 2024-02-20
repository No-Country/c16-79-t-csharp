import "./App.css";
import NavBar from "./Common/NavBar";
import { FooterComponent } from "./Common/FooterComponent";
import { CarouselBanner } from "./Components/Carousel/CarouselBanner";
function App() {
  return (
    <>
      <NavBar />
      <CarouselBanner></CarouselBanner>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
