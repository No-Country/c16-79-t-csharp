import { Card } from "flowbite-react";
import MascotasJson from "../../json/mascotas.json";
import { ListGroup } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import EdicionDatos from "./EdicionDatos";
import "./misMascotas.css";

export const MisMascotas = () => {
  return (
    <div className="container max-w-7xl flex justify-center gap-10 ">
      {MascotasJson.map((d) => {
        return (
          <Card
            key={d.id}
            className="max-w-sm cardMascota"
            imgAlt="Meaningful alt text for an image that is not purely decorative "
            imgSrc={d.foto}
          >
            <div className="flex justify-center ">
              <ListGroup className="w-48">
                <ListGroup.Item icon={HiUserCircle} active>
                  {d.nombre}
                </ListGroup.Item>
                <ListGroup.Item icon={BsCalendar2DateFill}>
                  {d.edad}
                </ListGroup.Item>
                <ListGroup.Item icon={GiWeight}>{d.peso}</ListGroup.Item>
                <ListGroup.Item icon={MdOutlinePets}>{d.raza}</ListGroup.Item>
              </ListGroup>
            </div>
            <EdicionDatos idMascotas={d.id} />
          </Card>
        );
      })}
    </div>
  );
};
