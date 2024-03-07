import { Table } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";
import { TurnosCancelables } from "./TurnosCancelables";

export const Turnos = () => {
  const [turnos, setTurnos] = useState([]); // Se cambió "first" por "turnos"



  let { fetchData } = useFetchGet("api/ClientUsers/me/Dates");
  

  //useEffect para traer todas las citas
  useEffect(() => {
    const handleDatos = async () => {
      try {
        const objetoTurnos = await fetchData();
        console.log("Turnos received:", objetoTurnos.data);
        setTurnos(objetoTurnos.data); // Se cambió "first" por "turnos"
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    handleDatos();
  }, []);

 

  console.log(" mascotas data desde turnos: ", mascotasData[1]);




  return (
    <div className="container w-4/5 mx-auto mt-10 mb-10">
      <h1 className="py-5 mb-4 text-2xl font-extrabold leading-none tracking-tight text-center text-gray-500 md:text-5xl lg:text-4xl dark:text-white">
        Mis turnos
      </h1>


      <br />
      {/* tabla para traer los turnos */}
      <div className="overflow-x-auto">
        <Table className="text-center">
          <Table.Head>
            <Table.HeadCell className="bg-gray-300">Turno</Table.HeadCell>
            <Table.HeadCell className="bg-gray-300">Servicio</Table.HeadCell>
            <Table.HeadCell className="bg-gray-300">Mascota</Table.HeadCell>
            <Table.HeadCell className="bg-gray-300">Estado</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {turnos.map((turno) => { // Se cambió "first" por "turnos"
              const dt = new Date(turno.time);
              return (
                <Table.Row
                  key={turno.id}
                  className="bg-gray-200 dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <p>{dt.toLocaleString()}</p>
                  </Table.Cell>                
                  <Table.Cell>{turno.serviceType}</Table.Cell>
                  <Table.Cell>{turno.petName}</Table.Cell>
                  <Table.Cell>{turno.stateName}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
      
      <TurnosCancelables></TurnosCancelables>



    </div>
  );
};
