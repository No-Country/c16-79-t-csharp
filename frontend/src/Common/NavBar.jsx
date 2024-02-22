
import { Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar className='container xl mx-auto' fluid rounded>
                <Navbar.Brand href="#">
                <NavLink to="/"><img src="/Huella_amiga-logoMain.png" className="mr-10 h-12 sm:h-20" alt="Logo Huellas Felices" /></NavLink>
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Huella Amiga</span> */}
                </Navbar.Brand>
                <div className="flex md:order-2 ml-10">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <NavLink to="/perfil"><Dropdown.Item>Perfil</Dropdown.Item></NavLink>
                        <NavLink to="/"><Dropdown.Item>Mi Carrito</Dropdown.Item></NavLink>
                        <Dropdown.Divider />
                        <Dropdown.Item>Cerrar sesión</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link className='text-base'><NavLink to="/">Inicio</NavLink></Navbar.Link>
                    <Navbar.Link className='text-base'><NavLink to="/tienda">Tienda</NavLink></Navbar.Link>
                    <Navbar.Link className='text-base'><NavLink to="/adoptar">Quiero Adoptar</NavLink></Navbar.Link>
                    <Navbar.Link className='text-base'><NavLink to="/agenda">Agenda</NavLink></Navbar.Link>
                    <Navbar.Link className='text-base'><NavLink to="/servicios">Servicios</NavLink></Navbar.Link>
                    <Navbar.Link className='text-base'><NavLink to="perdidos-encontrados">Perdidos y Encontrados</NavLink></Navbar.Link>
                    <Navbar.Link className='text-base'><NavLink to="/quienesSomos">Quienes Somos</NavLink></Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default NavBar