/* eslint-disable react-hooks/exhaustive-deps */

import { Table } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";
import { EdicionDatosUsuario } from "./EdicionDatosUsuario";

const DatosUsuario = () => {
  const [first, setfirst] = useState();

  const { fetchData } = useFetchGet("api/ClientUsers/me");

  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const data = await fetchData();
          setfirst(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    handleDatos();
  }, []);

  return (
    <div className="overflow-x-auto container w-4/5 mx-auto mt-10 mb-10">
      <Table>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Nombre
            </Table.Cell>
            <Table.Cell>{first?.data?.name}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Nombre Usuario
            </Table.Cell>
            <Table.Cell>{first?.data?.userName}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apellido
            </Table.Cell>
            <Table.Cell>{first?.data?.lastName}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Teléfono
            </Table.Cell>
            <Table.Cell>{first?.data?.phoneNumber}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <EdicionDatosUsuario
        nombre={first?.data?.name}
        apellido={first?.data?.lastName}
        usuario={first?.data?.userName}
        telefono={first?.data?.phoneNumber}
      />
    </div>
  );
};

export default DatosUsuario;
