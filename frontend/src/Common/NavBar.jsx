
import { Dropdown, Navbar } from 'flowbite-react';

const NavBar = () => {
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand href="#">
                    <img src="public/logo.png" className="mr-12 h-12 sm:h-20" alt="Logo Huellas Felices" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Huella Feliz</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            // <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Perfil</Dropdown.Item>
                        <Dropdown.Item>Mi Carrito</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Cerrar sesion</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Inicio
                    </Navbar.Link>
                    <Navbar.Link href="#">Tienda</Navbar.Link>
                    <Navbar.Link href="#">Quiero Adoptar</Navbar.Link>
                    <Navbar.Link href="#">Agenda</Navbar.Link>
                    <Navbar.Link href="#">Servicios</Navbar.Link>
                    <Navbar.Link href="#">Perdidos y Encontrados</Navbar.Link>
                    <Navbar.Link href="#">Quienes Somos</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default NavBar