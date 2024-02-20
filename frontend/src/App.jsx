
import './App.css'
import NavBar from './Common/NavBar'
import { FooterComponent } from './Common/FooterComponent'
import ProductoDestacados from './Components/ProductosDestacados/ProductoDestacados'
import Ofertas from './Components/Ofertas/Ofertas'


function App() {


  return (
    <>
      <NavBar />
      <Ofertas/>
      <ProductoDestacados />
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
