import {  Card } from 'flowbite-react';
import { useEffect, useState } from "react";
import { useFetchGet } from '../../Helpers/useFetch';

export const HistorialMedico = () => {
  const [historialMedico, setHistorialMedico] = useState([]);

  const { fetchData } = useFetchGet("api/ClientUsers/me/pets/medicalhistories");

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
  
    <div className='container flex gap-10 mx-auto flex-wrap justify-center'>
    {historialMedico.map((item, index) => (
      <Card key={index}  className="max-w-sm bg-[radial-gradient(ellipse_80%_80%at_50%-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                
        <p className="font-bold text-xl text-gray-700 dark:text-gray-400 text-center">
          {item.petName}
        </p> 
        <h5 className="text-base  tracking-tight text-gray-600 dark:text-white">
          Diagnóstico
        </h5>
        <p className="font-normal text-lg text-gray-800 dark:text-gray-800">
          {item.diagnostic}
        </p>
        <h5 className="text-base  tracking-tight text-gray-600 dark:text-white">
          Médico Veterinario
        </h5>
        <p className="font-normal text-lg text-gray-700 dark:text-gray-800">
          {item.medic}
        </p>
        <h5 className="text-base tracking-tight text-gray-600 dark:text-white">
          Fecha
        </h5>
        <p className="font-normal text-lg text-gray-700 dark:text-gray-800">
          {(new Date(item.time)).toLocaleDateString()}
        </p>        
      </Card>
    ))}
    </div>
  );
};