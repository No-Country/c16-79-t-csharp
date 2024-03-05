import { Button, Dropdown, Navbar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {

  // me guardo la funcion para moverme al home despues de cerrar sesión
  const navigate = useNavigate();

  // verifica si existe token en local storage y si existe lo borra y lo vuelve al home despues de cerrar sesión
  const cerrarSesion = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  //  constante para guardarme cuando quiero mostra y ocultar el boton de cerrar sesión
  const mostrarCerrarSesion = localStorage.getItem("token") ? true : false;

  return (
    <>
      <Navbar fluid rounded className="container max-w-6xl mx-auto">
        <Navbar.Brand href="#" className=" mx-auto md:ml-0">
          <NavLink to="/">
            <img
              src="/Huella_amiga-removebg-preview.png"
              className="md:mr-12 md:h-12 h-24"
              alt="Logo Huellas Felices"
            />
          </NavLink>
        </Navbar.Brand>
        <div className="flex md:order-2 mx-auto">
          <div>
            {!mostrarCerrarSesion && ( // Mostrar botones solo si no está logeado
              <Button.Group className=" mr-2">
                <NavLink to={"/login"}>
                  <Button color="gray">Iniciar Sesión</Button>
                </NavLink>
                <NavLink to={"/registro"} className=" ml-2">
                  <Button color="gray">Registrarse</Button>
                </NavLink>
              </Button.Group>
            )}
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
            {mostrarCerrarSesion && ( // Mostrar botón de cerrar sesión solo si está logeado
              <Dropdown.Item onClick={cerrarSesion}>Cerrar sesión</Dropdown.Item>
            )}
          </Dropdown>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink to="/" className="text-base">
              Inicio
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/catalogo" className="text-base">
              Catálogo
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/agenda" className="text-base">
              Agenda
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/servicios" className="text-base">
              Servicios
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="/quienessomos" className="text-base">
              Quienes Somos
            </NavLink>
          </Navbar.Link>
          {/* Agregar otros enlaces aquí */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
