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
        className="pb-0 bg-gradient-to-b from-purple-50 to-purple-200 pb-4"
      >
        <div className="w-full">
          <div className="imagenLogo justify-around sm:flex  md:grid-cols-1  sm:flex-col sm:items-center lg:flex-row lg:justify-around">
            <div className="  w-full flex flex-col items-center justify-center lg:items-start lg:w-1/5">
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
            <div className="flex flex-wrap justify-center sm:flex-nowrap sm:w-4/5 md:w-3/5 md:justify-between">
              <div className="flex justify-evenly w-full sm:w-2/4">
                <Footer.LinkGroup col className=" sm:w-2/4">
                  <h3 className=" pt-8 mb-0 font-bold leading-none tracking-tight  text-left text-gray-500 md:text-sm lg:text-base dark:text-white">
                    Links
                  </h3>
                  <Footer.Link href="#">
                    <NavLink
                      to="/"
                      className=" text-black text-light text-center"
                    >
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

                <Footer.LinkGroup col className="sm:w-2/4">
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
              <div className=" ">
                <h3 className=" pt-8 mb-3 font-bold leading-none tracking-tight  text-center text-gray-500 md:text-sm lg:text-base dark:text-white">
                  Colaboradores
                </h3>
                <div className="grid grid-cols-2 gap-4 items-start sm:w-full">
                  <Avatar
                    img="https://github.com/Rixda.png"
                    rounded
                    className=" justify-start"
                  >
                    <a target="_blank" href="https://github.com/Rixda">
                      <div className="space-y-1 font-medium dark:text-white">
                        <div>Adrián lucero</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Backend Dev .Net c#
                        </div>
                      </div>
                    </a>
                  </Avatar>
                  <Avatar
                    img="https://github.com/AgusVolpe.png"
                    rounded
                    className=" justify-start"
                  >
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/agustin-volpe/"
                    >
                      <div className="space-y-1 font-medium dark:text-white">
                        <div>Agustin Volpe</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Backend Dev .Net c#
                        </div>
                      </div>
                    </a>
                  </Avatar>

                  <Avatar
                    img="https://github.com/alefernandez88.png"
                    rounded
                    className=" justify-start"
                  >
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/alefernandez88/"
                    >
                      <div className="space-y-1 font-medium dark:text-white">
                        <div>Ale Fernandez</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Frontend Dev React Js
                        </div>
                      </div>
                    </a>
                  </Avatar>
                  <Avatar
                    img="https://github.com/kamilo042.png"
                    rounded
                    className=" justify-start"
                  >
                    <a target="_blank" href="https://www.linkedin.com/in/camilo-perez-398b62186/">
                      <div className="space-y-1 font-medium dark:text-white">
                        <div>Camilo Pérez</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Frontend Dev React Js
                        </div>
                      </div>
                    </a>
                  </Avatar>
                  <Avatar
                    img="https://github.com/CariCosta90.png"
                    rounded
                    className=" justify-start"
                  >
                    <a target="_blank" href="https://www.linkedin.com/in/carina-costa-54891233/">
                      <div className="space-y-1 font-medium dark:text-white">
                        <div>Carina Costa</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Frontend Dev React Js
                        </div>
                      </div>
                    </a>
                  </Avatar>
                  <Avatar
                    img="https://github.com/ant-villasante98.png"
                    rounded
                    className=" justify-start"
                  >
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/helí-antonio-villasante-hilares-96465b263"
                    >
                      <div className="space-y-1 font-medium dark:text-white">
                        <div>Antonio Villasante</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Backend Dev .Net c#
                        </div>
                      </div>
                    </a>
                  </Avatar>
                  <Avatar
                    img="https://github.com/GuillermoCruz27.png"
                    rounded
                    className=" justify-start"
                  >
                    <a target="_blank" href="http://www.linkedin.com/in/guillermo-joaquin-cruz">
                      <div className="space-y-1 font-medium dark:text-white">
                        <div>Joaquin Cruz</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Backend Dev .Net c#
                        </div>
                      </div>
                    </a>
                  </Avatar>
                  <Avatar
                    img="https://github.com/Teche95.png"
                    rounded
                    className=" justify-start"
                  >
                    <a target="_blank" href="https://www.linkedin.com/in/gustavo-julian-techeira">
                      <div className="space-y-1 font-medium dark:text-white">
                        <div>Julián Techeira</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Frontend Dev React Js
                        </div>
                      </div>
                    </a>
                  </Avatar>
                  <Avatar
                    img="https://github.com/MikhailIvanGarcilano.png"
                    rounded
                    className=" justify-start"
                  >
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/camilo-perez-398b62186"
                    >
                      <div className="space-y-1 font-medium dark:text-white">
                        <div>Mikhail Garcilano</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Testing QA
                        </div>
                      </div>
                    </a>
                  </Avatar>
                </div>
              </div>
            </div>
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
