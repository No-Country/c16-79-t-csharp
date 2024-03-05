import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Mapa from "../Components/Mapa/Mapa";
import "./navBar.css";

export const FooterComponent = () => {
  return (
    <>
      <Footer container>
        <div className="w-full">
          <div className=" w-full justify-between sm:flex sm:justify-between md:grid-cols-1 imagenLogo flex-col md:flex-row">
            <div>
              <Footer.Brand
                href="#"
                src="/Huella_amiga-removebg-preview.png"
                alt="Logo"
                className=""
              />
            </div>
            <div className=" mt-6 grid grid-cols-2 gap-4 sm:mt-2 lg:grid-cols-3 sm:gap-6 items-center ">
              <div>
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Inicio</Footer.Link>
                  <Footer.Link href="#">Tienda</Footer.Link>
                  <Footer.Link href="#">Quiero adoptar</Footer.Link>
                  <Footer.Link href="#">Agenda</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.LinkGroup col >
                  <Footer.Link href="#">Servicios</Footer.Link>
                  <Footer.Link href="#">Perdidos y Encontrados</Footer.Link>
                  <Footer.Link href="#">Quienes Somos</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className=" mt-6">
              <Mapa></Mapa>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full flex flex-col items-center md:flex-row md:items-start md:justify-between">
            <Footer.Copyright href="#" by="HuellaFeliz™" year={2024} className=" mb-5 items-center"/>
            <div className=" flex space-x-6 sm:mt-0 sm:justify-center">
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
  );
};
