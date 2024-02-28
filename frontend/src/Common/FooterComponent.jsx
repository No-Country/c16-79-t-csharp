
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Mapa from '../Components/Mapa/Mapa'


export const FooterComponent = () => {
  return (
    <>
           <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-around sm:flex  md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src="/logo.png"
              alt="Logo"  
            />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:mt-2 lg:grid-cols-3 sm:gap-6 items-center">         

            <div>
              
              <Footer.LinkGroup col>
                <Footer.Link href="#">Inicio</Footer.Link>
                <Footer.Link href="#">Tienda</Footer.Link>
                <Footer.Link href="#">Quiero adoptar</Footer.Link>
                <Footer.Link href="#">Agenda</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              
              <Footer.LinkGroup col>
                <Footer.Link href="#">Servicios</Footer.Link>
                <Footer.Link href="#">Perdidos y Encontrados</Footer.Link>
                <Footer.Link href="#">Quienes Somos</Footer.Link>
              </Footer.LinkGroup>
            </div> 
            <div>
              <Mapa></Mapa>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="HuellaFeliz™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer> 
    </>
  )
}
