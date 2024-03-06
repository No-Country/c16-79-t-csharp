/* eslint-disable react-hooks/exhaustive-deps */
import { Table, Button } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import {useFetchPatch} from "../../Helpers/useFetch";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export const TurnosCancelables = () => {
  //useState para tabla de fechas cancelables

  const [inputCancel, setInputCancel] = useState();

  //use state para tomar el id especifico de la cita a cancelar
  const [idCancelar, setIdCancelar] = useState();

  let {fetchDataPatch} = useFetchPatch(`api/Dates/${idCancelar}/cancel`)
    //let {fetchDataPatch} = useFetchPatch("api/Dates/"+idCancelar+"/cancel")
  let { fetchData } = useFetchGet("api/ClientUsers/me/Next24hsDates");



  //useEffect para traer citas cancelables
  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const objetoTurnos = await fetchData();
          console.log("Turnos received:", objetoTurnos.data);
          setInputCancel(objetoTurnos.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    handleDatos();
    //eslint-disable-next-line
  }, []);

  //funcion para recolectar el id y ejecutar el patch para actualizar la lista de cancelados

  const recibirId = (id) => {
    console.log(id);
    setIdCancelar(id)
    window.location.reload()
  };

  useEffect(() => {
    fetchDataPatch();    
  }, [idCancelar])
  

  return (
    <>
      <h1 className="py-5 mb-4 text-2xl font-extrabold leading-none tracking-tight text-center text-gray-500 md:text-5xl lg:text-4xl dark:text-white">
        Turnos cancelables
      </h1>
      <p>
        * Todos los turnos son de 30 minutos. Solo podran ser cancelados hasta
        24hs antes de la fecha y hora agendada.
      </p>
      <div className="overflow-x-auto">
        <Table className="text-center">
          <Table.Head>
            <Table.HeadCell className="bg-gray-300">Turno</Table.HeadCell>
            <Table.HeadCell className="bg-gray-300">Servicio</Table.HeadCell>
            <Table.HeadCell className="bg-gray-300">Mascota</Table.HeadCell>
            <Table.HeadCell className="bg-gray-300">Estado</Table.HeadCell>
            <Table.HeadCell className="bg-gray-300">
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {inputCancel?.map((turno) => {
              let dt = new Date(turno.time);
              console.log("dt: ", dt);
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
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        recibirId(turno.id);
                      }}
                      color="failure"
                    >
                      <FaRegTrashAlt />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};
