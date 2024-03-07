import { Footer, Avatar, Label, TextInput } from "flowbite-react";
import { NavLink } from "react-router-dom";
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
      <div className=" mt-12">
        <Mapa></Mapa>
      </div>
      <Footer
        container
        className="pb-0 bg-gradient-to-b from-purple-50 to-purple-200"
      >
        <div className="w-full">
          <div className=" justify-around sm:flex sm:justify-around md:grid-cols-1 imagenLogo flex-col md:flex-row">
            <div className=" w-1/5">
              <Footer.Brand
                href="#"
                src="/Huella_amiga-removebg-preview.png"
                alt="Logo"
                className="logoImg"
              />
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="email3" value="Ingresa tu mail" />
                </div>
                <TextInput
                  className=" w=2/4"
                  id="email3"
                  type="email"
                  placeholder="name@mail.com"
                  required
                  helperText={
                    <>
                      Suscribete a nuestro Newsletter. Leer nuestras
                      <a
                        href="#"
                        className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Políticas de privacidad
                      </a>
                      .
                    </>
                  }
                />
              </div>
            </div>
            {/* <div className=" mt-6 grid grid-cols-2 gap-4 sm:mt-2 lg:grid-cols-3 sm:gap-6 items-start "> */}
            <div className=" flex w-3/5 justify-between">
              <div>
                <Footer.LinkGroup col>
                  <h3 className=" pt-8 mb-0 font-bold leading-none tracking-tight  text-left text-gray-500 md:text-sm lg:text-base dark:text-white">
                    Links
                  </h3>
                  <Footer.Link href="#">
                    <NavLink to="/" className=" text-black text-light">
                      Inicio
                    </NavLink>
                  </Footer.Link>
                  <Footer.Link href="#">
                    <NavLink to="/catalogo" className=" text-black text-light">
                      Catálogo
                    </NavLink>
                  </Footer.Link>
                  <Footer.Link href="#">
                    <NavLink to="/agenda" className=" text-black text-light">
                      Agenda
                    </NavLink>
                  </Footer.Link>
                  <Footer.Link href="#" className=" text-black">
                    Royal Canin
                  </Footer.Link>
                  <Footer.Link href="#" className=" text-black">
                    ProPlan
                  </Footer.Link>
                  <Footer.Link href="#" className=" text-black">
                    Eukanuba
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.LinkGroup col>
                  <h3 className=" pt-8 mb-0 font-bold leading-none tracking-tight  text-left text-gray-500 md:text-sm lg:text-base dark:text-white">
                    Servicios
                  </h3>
                  <Footer.Link href="#" className="text-black">
                    Turnos
                  </Footer.Link>
                  <Footer.Link href="#" className="text-black">
                    Consultorio
                  </Footer.Link>
                  <Footer.Link href="#" className="text-black">
                    Vacunaciones
                  </Footer.Link>
                  <Footer.Link href="#" className="text-black">
                    Rayos X
                  </Footer.Link>
                  <Footer.Link href="#" className="text-black">
                    Cirugía
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className=" bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]">
                <h3 className=" pt-8 mb-0 font-bold leading-none tracking-tight  text-center text-gray-500 md:text-sm lg:text-base dark:text-white">
                  Colaboradores
                </h3>
                <div className="grid grid-cols-2 gap-4 items-start">
                  <Avatar
                    img="https://github.com/Rixda.png"
                    rounded
                    className=" justify-start"
                  >
                    <div className="space-y-1 font-medium dark:text-white">
                      <div>Adrián lucero</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Backend Dev .Net c#
                      </div>
                    </div>
                  </Avatar>
                  <Avatar
                    img="https://github.com/AgusVolpe.png"
                    rounded
                    className=" justify-start"
                  >
                    <div className="space-y-1 font-medium dark:text-white">
                      <div>Agustin Volpe</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Backend Dev .Net c#
                      </div>
                    </div>
                  </Avatar>
                  <Avatar
                    img="https://github.com/alefernandez88.png"
                    rounded
                    className=" justify-start"
                  >
                    <div className="space-y-1 font-medium dark:text-white">
                      <div>Ale Fernandez</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Frontend Dev React Js
                      </div>
                    </div>
                  </Avatar>
                  <Avatar
                    img="https://github.com/kamilo042.png"
                    rounded
                    className=" justify-start"
                  >
                    <div className="space-y-1 font-medium dark:text-white">
                      <div>Camilo Pérez</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Frontend Dev React Js
                      </div>
                    </div>
                  </Avatar>
                  <Avatar
                    img="https://github.com/CariCosta90.png"
                    rounded
                    className=" justify-start"
                  >
                    <div className="space-y-1 font-medium dark:text-white">
                      <div>Carina Costa</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Frontend Dev React Js
                      </div>
                    </div>
                  </Avatar>
                  <Avatar
                    img="https://github.com/ant-villasante98.png"
                    rounded
                    className=" justify-start"
                  >
                    <div className="space-y-1 font-medium dark:text-white">
                      <div>Antonio Villasante</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Backend Dev .Net c#
                      </div>
                    </div>
                  </Avatar>
                  <Avatar
                    img="https://github.com/GuillermoCruz27.png"
                    rounded
                    className=" justify-start"
                  >
                    <div className="space-y-1 font-medium dark:text-white">
                      <div>Joaquin Cruz</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Backend Dev .Net c#
                      </div>
                    </div>
                  </Avatar>
                  <Avatar
                    img="https://github.com/Teche95.png"
                    rounded
                    className=" justify-start"
                  >
                    <div className="space-y-1 font-medium dark:text-white">
                      <div>Julián Techeira</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Frontend Dev React Js
                      </div>
                    </div>
                  </Avatar>
                  <Avatar
                    img="https://github.com/MikhailIvanGarcilano.png"
                    rounded
                    className=" justify-start"
                  >
                    <div className="space-y-1 font-medium dark:text-white">
                      <div>Mikhail Garcilano</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Testing QA
                      </div>
                    </div>
                  </Avatar>
                </div>
              </div>
            </div>
            {/* <div className=" mt-6">
              <Mapa></Mapa>
            </div> */}
          </div>
          <Footer.Divider className=" lg:mt-4 lg:mb-2" />
          <div className="w-full flex flex-col items-center md:flex-row md:items-start md:justify-between">
            <Footer.Copyright
              href="#"
              by="HuellaFeliz™"
              year={2024}
              className=" mb-5 items-center"
            />
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
