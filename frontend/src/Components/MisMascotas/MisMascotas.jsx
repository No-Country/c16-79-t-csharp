import { Card } from "flowbite-react";
//import MascotasJson from "../../json/mascotas.json";
import { ListGroup } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import "./misMascotas.css";
import { useEffect, useState } from "react";
import { useFetchGet } from "../../Helpers/useFetch";

export const MisMascotas = () => {


  const [info, setInfo] = useState([])

  console.log("info", info)

  const { fetchData } = useFetchGet("api/ClientUsers/me/pets")

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
    <div className="container max-w-7xl flex justify-center gap-10 mt-10 mb-10">
      {info.length > 0 ? info?.map((d) => {
        return (
          <Card
            key={d.id}
            className="max-w-sm cardMascota"
            imgAlt="Meaningful alt text for an image that is not purely decorative "
            imgSrc={d.photo}
          >
            <div className="flex justify-center ">
              <ListGroup className="w-48">
                <ListGroup.Item icon={HiUserCircle} active>
                  {d.name}
                </ListGroup.Item>
                <ListGroup.Item icon={BsCalendar2DateFill}>
                  {d.edad}
                </ListGroup.Item>
                <ListGroup.Item icon={GiWeight}>{d.weight}</ListGroup.Item>
                <ListGroup.Item icon={MdOutlinePets}>{d.race}</ListGroup.Item>
              </ListGroup>
            </div>
          </Card>
        );
      }) : <p>no tiene mascotas</p>}
    </div>
  );
};
