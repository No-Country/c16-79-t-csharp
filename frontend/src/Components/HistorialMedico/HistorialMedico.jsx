import { Accordion } from 'flowbite-react';
import { useEffect, useState } from "react";
import { useFetchGet } from '../../Helpers/useFetch';

export const HistorialMedico = () => {
  const [historialMedico, setHistorialMedico] = useState([]);

  const { fetchData } = useFetchGet("api/MedicalHistories");

  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const data = await fetchData();
          setHistorialMedico(data.data); // Assuming 'data' is an array
          console.log(data.data[0].diagnostic, "historial medico");
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    handleDatos();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Accordion className='container w-4/5 mx-auto mt-10 mb-10'>
        {historialMedico.slice(0,1).map((item, index) => (
          <Accordion.Panel key={index}>
            <Accordion.Title>Diagnóstico</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item.diagnostic}
              </p>
            </Accordion.Content>
            <Accordion.Title>Médico Veterinario</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item.medic}
              </p>
            </Accordion.Content>
            <Accordion.Title>Fecha</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item.time}
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </>
  );
};
