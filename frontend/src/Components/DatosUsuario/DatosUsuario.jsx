import { Table } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";


const DatosUsuario = () => {

  const [first, setfirst] = useState()
  // console.log("first", first)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await useFetchGet("api/ClientUsers/my-clientuser");
        setfirst(data)
        // console.log("Data received:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="overflow-x-auto container w-4/5 mx-auto mt-10 mb-10">
      <Table>
        <Table.Body className="divide-y">



          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Nombre
            </Table.Cell>
            <Table.Cell>{first?.data.lastName}</Table.Cell>
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
            <Table.Cell>{first?.data.phoneNumber}</Table.Cell>
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
            <Table.Cell>{first?.data.phoneNumber}</Table.Cell>
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
    </div>
  );
};

export default DatosUsuario;