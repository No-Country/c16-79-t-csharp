/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Dropdown } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";

export const SeleccioneSuMascota = () => {
  const [info, setInfo] = useState([]);

  console.log("info", info);

  const { fetchData } = useFetchGet("api/ClientUsers/me/pets");

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
    <div>
      <Dropdown label="Seleccione su mascota" dismissOnClick={false}>
        {info.length > 0 ? (
          info?.map((d) => {
            return <Dropdown.Item key={d.id}>{d.name}</Dropdown.Item>;
          })
        ) : (
            <Dropdown.Item >No tiene mascotas cargadas </Dropdown.Item>
        )}
      </Dropdown>
    </div>
  );
};
