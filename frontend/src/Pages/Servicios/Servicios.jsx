import { ListadoServicios } from "../../Components/Servicios/ListadoServicios";

export const Servicios = () => {
  return (
    <>
      <h1>¡Bienvenido al Sanatorio Veterinario Huella Amiga!</h1>

      <div id="contenedorHeaderServicios">
        {" "}
        <p>
          En nuestro sanatorio, nos dedicamos a brindar atención médica integral
          para tus queridas mascotas. Desde perros y gatos hasta aves y
          reptiles, nuestro equipo de profesionales altamente calificados está
          aquí para garantizar el bienestar de tus compañeros peludos.
        </p>
        <img id="perroygato" src="perroygatojpg.jpg" alt="" />
      </div>

      <ListadoServicios/>

      <div className="contenedorPieServicios">
        <p>      En el Sanatorio Veterinario Huella Amiga, nos comprometemos a proporcionar el más alto nivel de atención médica y cuidado para todas las mascotas que llegan a nuestras puertas. ¡Únete a nuestra comunidad y cuidemos juntos de la salud y felicidad de nuestros amigos de cuatro patas!</p>

      </div>

      
    </>
  );
};
