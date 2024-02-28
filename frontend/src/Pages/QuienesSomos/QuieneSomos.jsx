import { Card } from "flowbite-react";
import perro_pata from "./mano-perro.jpg";
import cat_vet from "./cat-vet.jpg";
import cat_doc from "./cat-doc.jpg";

export const QuieneSomos = () => {
  return (
    <div className="flex w-3/4 m-auto mt-50 ">
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={perro_pata}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ¿Quienes Somos?
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Bienvenidos a <bold>Huella Amiga</bold>, tu centro de atención
          integral para mascotas en Argentina. En Huella Amiga, nos apasiona el
          bienestar y la salud de tus fieles compañeros de cuatro patas.{" "}
        </p>
      </Card>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={cat_vet}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Misión
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          En Huella Amiga, nuestra misión es crear un ambiente cálido y acogedor
          donde tanto tú como tu mascota se sientan cómodos y seguros. Desde
          consultas de rutina hasta tratamientos especializados, estamos aquí
          para cuidar de cada aspecto de la salud y el bienestar de tus amigos
          peludos con atención experta y compasiva.
        </p>
      </Card>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={cat_doc}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Visión
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Con años de experiencia en el cuidado veterinario, nuestro equipo
          altamente calificado está dedicado a brindar la mejor atención médica
          y atención personalizada para tus queridas mascotas. Desde perros
          juguetones hasta gatos curiosos, nos comprometemos a proporcionar
          servicios de alta calidad para mantener a tus amigos peludos felices y
          saludables en cada etapa de sus vidas.
        </p>
      </Card>
    </div>
  );
};
