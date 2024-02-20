
import './App.css'
import NavBar from './Common/NavBar'
import {FooterComponent}   from './Common/FooterComponent' 
import CarrouselMarcas from './Components/CarrouselMarcas/CarrouselMarcas'

function App() {

  return (
    <>
      <NavBar />
      <CarrouselMarcas/>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
