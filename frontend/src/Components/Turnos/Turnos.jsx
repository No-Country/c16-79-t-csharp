"use client";
import TurnosJSON from "../../json/turnos.json";
import { Table } from "flowbite-react";

export const Turnos = () => {
  return (
    <div className='container w-4/5 mx-auto mt-10 mb-10'>

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
            {TurnosJSON.map((turno) => (
              <Table.Row
                key={turno.id}
                className="bg-gray-200 dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <p>
                    {turno.Fecha} {turno.Hora}hs
                  </p>
                </Table.Cell>
                <Table.Cell>{turno.Servicio}</Table.Cell>
                <Table.Cell>{turno.Mascota}</Table.Cell>
                <Table.Cell>{turno.Estado}</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Cancelar
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
