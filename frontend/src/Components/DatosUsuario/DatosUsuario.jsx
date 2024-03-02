import { Table } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";
import { EdicionDatosUsuario } from "./EdicionDatosUsuario";

const DatosUsuario = () => {

  const [first, setfirst] = useState()

  console.log("first", first)

  const {fetchData} = useFetchGet("api/ClientUsers/me")

  useEffect(() => {
    const handleDatos = async () => {
      try {
        const data = await fetchData()
        console.log("Data received:", data);
        setfirst(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    handleDatos();
    //eslint-disable-next-line
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
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Nombre Usuario
            </Table.Cell>
            <Table.Cell>{first?.data?.userName}</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apellido
            </Table.Cell>
            <Table.Cell>{first?.data?.lastName}</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Telefono
            </Table.Cell>
            <Table.Cell>{first?.data?.phoneNumber}</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <EdicionDatosUsuario name={first?.data?.name} lastName={first?.data?.lastName} nombre={first?.data?.userName} telefono={first?.data?.phoneNumber} />
    </div>
  );
};

export default DatosUsuario;