/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Table } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";

export const Turnos = ({ mascotasData }) => {
  const [first, setfirst] = useState();

  // console.log("first", first);

  let { fetchData } = useFetchGet("api/ClientUsers/me/Dates");

  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const objetoTurnos = await fetchData();
          console.log("Turnos received:", objetoTurnos.data);
          setfirst(objetoTurnos.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    handleDatos();
    //eslint-disable-next-line
  }, []);

  console.log(" mascotas data desde turnos: ", mascotasData[1]);

  return (
    <div className="container w-4/5 mx-auto mt-10 mb-10">
      <p>
        * Todos los turnos son de 30 minutos. Solo podran ser cancelados hasta
        24hs antes de la fecha y hora agendada.
      </p>

      <br />
      {/* tabla para traer los turnos */}
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
            {first?.map((turno) => {
              let dt = new Date(turno.time);
              console.log("dt: ", dt)
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
                  <Table.Cell>{turno.stateDate}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Cancelar
                    </a>
                  </Table.Cell>
                </Table.Row>
              );
            })
            }
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
