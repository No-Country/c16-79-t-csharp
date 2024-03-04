/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Select, Label } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";

export const SeleccioneSuMascota = ({ sendDataToParent }) => {
  const [info, setInfo] = useState([]);
  const [valueMascota, setValueMascota] = useState();

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

  //Lógica para enviar datos al padre

  const sendData = (e) => {
    setValueMascota(e.target.value);
  };

  useEffect(() => {
    sendDataToParent(valueMascota); // Invocando la función del componente padre y pasando datos como argumento
    console.log("value mascota: ", valueMascota);
  }, [valueMascota]);

  return (
    <div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="mascota" value="Seleccione su mascota" />
        </div>
        <Select id="mascota" required onChange={sendData}>
          <option>--</option>
          {info.length > 0 ? (
            info?.map((d) => {
              return <option key={d.id}>{d.name}</option>;
            })
          ) : (
            <option>No tiene mascotas cargadas </option>
          )}
        </Select>
      </div>
    </div>
  );
};
