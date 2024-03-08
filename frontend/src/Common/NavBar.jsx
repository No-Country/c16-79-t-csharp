/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Dropdown, Navbar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import  { useEffect, useState } from  'react';
import { useFetchGet } from "../Helpers/useFetch";



const NavBar = () => {
  const navigate = useNavigate();

  const { fetchData } = useFetchGet("api/ClientUsers/me")
  const [info, setInfo] = useState([])



  // Función para cerrar sesión
  const cerrarSesion = () => {
    // Verificar si hay un token en el almacenamiento local
    if (localStorage.getItem("token")) {
      // Eliminar el token del almacenamiento local
      localStorage.removeItem("token");
      // Redirigir al usuario al inicio
      navigate("/");
    }
  };

  // Verificar si el usuario está logueado
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  console.log(localStorage.getItem("token"),"LOCALSTORAGE")
  console.log(isLoggedIn,"ISLOGGEDIN")


  //funcion para  mostrar los botones de acuerdo a su estado de autenticacion
  
  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const respuesta = await fetchData()
          // console.log("Data received:", respuesta.data);
          const pruebaRes = respuesta.data
          console.log("pruebaRes", pruebaRes)
          setInfo(pruebaRes)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    };
    handleDatos();
    // console.log("pruegaRes: ", info)
  }, []);

  return (
    <>
      <Navbar fluid rounded className="container max-w-6xl mx-auto">
        <Navbar.Brand href="#" className=" mx-auto md:ml-0">
          <NavLink to="/">
            {/* Logo */}
            <img
              src="/Huella_amiga-removebg-preview.png"
              className="md:mr-12 md:h-12 h-24"
              alt="Logo Huellas Felices"
            />
          </NavLink>
        </Navbar.Brand>
        <div className="flex mr-0 md:order-2 mx-auto">
          <div>
            {/* Mostrar botones de inicio de sesión y registro solo si el usuario no está logueado */}
            {!isLoggedIn && (
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
                className="  icon icon-tabler icon-tabler-user"
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
              {/* Información del usuario */}
              <span className="block text-sm">Bienvenido {isLoggedIn && (info?.name)}</span>
            </Dropdown.Header>
            <NavLink to="/perfil">
              <Dropdown.Item>Perfil</Dropdown.Item>
            </NavLink>
            <Dropdown.Divider />
            {/* Botón de cerrar sesión visible solo si el usuario está logueado */}
            {isLoggedIn && (
              <Dropdown.Item onClick={cerrarSesion}>Cerrar sesión</Dropdown.Item>
            )}
          </Dropdown>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>

            {/* Enlace al inicio */}
            <NavLink to="/" className="text-base hover:text-cyan-600 hover:scale-125 transition duration-150 ease-out hover:ease-in">
              Inicio
            </NavLink>

            <NavLink to="/catalogo" className="text-base hover:text-cyan-600 hover:scale-125 transition duration-150 ease-out hover:ease-in">
              Catálogo
            </NavLink>

          {/* Enlace a la agenda visible solo si el usuario está logueado */}
          {isLoggedIn && (

              <NavLink to="/agenda" className="text-base hover:text-cyan-600 hover:scale-125 transition duration-150 ease-out hover:ease-in">
                Agenda
              </NavLink>

          )}

            {/* Enlace a los servicios */}
            <NavLink to="/servicios" className="text-base hover:text-cyan-600 hover:scale-125 transition duration-150 ease-out hover:ease-in">
              Servicios
            </NavLink>


            {/* Enlace a la página "Quienes Somos" */}
            <NavLink to="/quienessomos" className="text-base hover:text-cyan-600 hover:scale-125 transition duration-150 ease-out hover:ease-in">
              Quienes Somos
            </NavLink>

          {/* Agregar otros enlaces aquí */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
