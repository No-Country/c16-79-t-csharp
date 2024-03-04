/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from "react";
import { useFetchGet } from "../../Helpers/useFetch";
import { Card } from "flowbite-react";
import { ListGroup } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import "./misMascotas.css";

export const MisMascotas = () => {

  const [info, setInfo] = useState([])

  console.log("info", info)

  const { fetchData } = useFetchGet("api/ClientUsers/me/pets")

  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const respuesta = await fetchData()
          console.log("Data received:", respuesta.data);
          const pruebaRes = respuesta.data

          setInfo(pruebaRes)

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    };
    handleDatos();
    console.log("pruebaRes: ",info)
  }, []);

  return (
    <div className="container max-w-7xl flex justify-center gap-10 mt-10 mb-10">
      
      {info.length>0? (info?.map((d) => {
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
      })): <h2 className="py-5 mb-4 text-xl font-extrabold leading-none tracking-tight text-center text-gray-500 md:text-2xl lg:text-2xl dark:text-white">Usted no tiene mascotas ingresadas.</h2>}
    </div>
  );
};
