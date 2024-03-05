import { Button, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom"; 

const NavBar = () => {

  return (
    <>
      <Navbar fluid rounded className="container max-w-6xl mx-auto">
        <Navbar.Brand href="#" className=" mx-auto md:ml-0">
          <NavLink to="/" >
            <img
              src="/Huella_amiga-removebg-preview.png"
              className="md:mr-12 md:h-12 h-24"
              alt="Logo Huellas Felices"
            />
          </NavLink>
        </Navbar.Brand>
        <div className="flex md:order-2 mx-auto">
          <div>
            <Button.Group className=" mr-2">
              <NavLink to={"/login"}>
                <Button
                  color="gray"
                >
                  Iniciar Sesión
                </Button>
              </NavLink>
              <NavLink to={"/registro"} className=" ml-2">
                <Button
                  color="gray"
                >
                  Registrarse
                </Button>
              </NavLink>
            </Button.Group>
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <NavLink to="/perfil">
              {" "}
              <Dropdown.Item>Perfil</Dropdown.Item>
            </NavLink>
            <Dropdown.Item>
              <NavLink to="/">Catalogo</NavLink>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Iniciar sesión</Dropdown.Item>
            <Dropdown.Item>Cerrar sesión</Dropdown.Item>
            <Dropdown.Item>Registrarse</Dropdown.Item>
          </Dropdown>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink to="/" className="text-base">Inicio</NavLink>
          </Navbar.Link>
          {/* <Navbar.Link>
            <NavLink to="" className="text-base">Tienda</NavLink>
          </Navbar.Link> */}
          {/* <Navbar.Link>
            <NavLink to="" className="text-base">Quiero Adoptar</NavLink>
          </Navbar.Link> */}
          <Navbar.Link>
            <NavLink to="/agenda" className="text-base">Agenda</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/servicios" className="text-base">Servicios</NavLink>
          </Navbar.Link>
          {/* <Navbar.Link>
            <NavLink to="" className="text-base">Perdidos y Encontrados</NavLink>
          </Navbar.Link> */}
          <Navbar.Link>
            <NavLink to="/quienessomos" className="text-base">Quienes Somos</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
