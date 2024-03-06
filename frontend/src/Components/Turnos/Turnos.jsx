import { Table } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";

export const Turnos = () => {
  const [turnos, setTurnos] = useState([]); // Se cambió "first" por "turnos"

  const { fetchData } = useFetchGet("api/ClientUsers/me/Dates");

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

  const cancelarTurno = async (id) => {
    try {
      // Lógica para cancelar el turno
      // Aquí debes hacer la llamada a la API para cancelar el turno por su ID
      console.log("Cancelando turno con ID:", id);
      // Actualizar la lista de turnos después de la cancelación
      setTurnos(turnos.filter((turno) => turno.id !== id)); // Se cambió "first" por "turnos"
    } catch (error) {
      console.error("Error cancelando turno:", error);
    }
  };

  const canCancel = (turno) => {
    const horaTurno = new Date(turno.time);
    const horaActual = new Date();
    const diferenciaHoras = (horaTurno - horaActual) / (1000 * 60 * 60); // Diferencia en horas

    return diferenciaHoras >= 24;
  };

  return (
    <div className="container w-4/5 mx-auto mt-10 mb-10">
      <p>
        * Todos los turnos son de 30 minutos. Solo podrán ser cancelados hasta
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
              <span className="sr-only">Cancelar</span>
            </Table.HeadCell>
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
                  <Table.Cell>{turno.stateDate}</Table.Cell>
                  <Table.Cell>
                    {canCancel(turno) && (
                      <button
                        onClick={() => cancelarTurno(turno.id)}
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        Cancelar
                      </button>
                    )}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
