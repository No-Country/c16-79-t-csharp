/* eslint-disable react-hooks/exhaustive-deps */
import { Dropdown } from 'flowbite-react';
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";

const SeleccionEstudio = () => {
  const [info, setInfo] = useState([]);

  console.log("info", info);

  const { fetchData } = useFetchGet("api/Services");

  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const respuesta = await fetchData();
          const pruebaRes = respuesta.data;
          setInfo(pruebaRes);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    handleDatos();
  }, []);
  return (

    <Dropdown label="Consulta Medica" dismissOnClick={false}>
    {info.length > 0 ? (
      info?.map((d) => {
        return <Dropdown.Item key={d.id}>{d.type}</Dropdown.Item>;
      })
    ) : (
      <Dropdown.Item >No tiene tipos cargados </Dropdown.Item>
  )}
  </Dropdown>
    
/*     <div>
          <Dropdown label="Consulta Medica" dismissOnClick={false}>
      <Dropdown.Item>Vacunación</Dropdown.Item>
      <Dropdown.Item>Analisis De Sangre</Dropdown.Item>
      <Dropdown.Item>Ecografia</Dropdown.Item>
      <Dropdown.Item>Corte De Pelo</Dropdown.Item>
    </Dropdown>
    </div> */
  )
}

export default SeleccionEstudio
