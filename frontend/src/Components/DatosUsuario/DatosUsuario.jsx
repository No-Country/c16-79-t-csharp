/* eslint-disable react-hooks/exhaustive-deps */

import { Table } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";
import { EdicionDatosUsuario } from "./EdicionDatosUsuario";

const DatosUsuario = () => {

  const [info, setInfo] = useState()

  console.log("info", info)

  const { fetchData } = useFetchGet("api/ClientUsers/me")

  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const data = await fetchData()
          console.log("Data received:", data);
          setInfo(data)
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
            <Table.Cell>{info?.data?.name}</Table.Cell>

          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Nombre Usuario
            </Table.Cell>
            <Table.Cell>{info?.data?.userName}</Table.Cell>

          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apellido
            </Table.Cell>
            <Table.Cell>{info?.data?.lastName}</Table.Cell>

          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Telefono
            </Table.Cell>
            <Table.Cell>{info?.data?.phoneNumber}</Table.Cell>

          </Table.Row>
        </Table.Body>
      </Table>
      <EdicionDatosUsuario nombre={info?.data?.name} apellido={info?.data?.lastName} nombreUsu={info?.data?.userName} telefono={info?.data?.phoneNumber} />
    </div>
  );
};

export default DatosUsuario;