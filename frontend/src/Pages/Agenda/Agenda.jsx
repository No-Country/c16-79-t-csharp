import { useEffect, useState } from "react";
import { SeleccioneSuMascota } from "../../Components/SeleccioneSuMacosta/SeleccioneSuMascota";
import SeleccionEstudio from "../../Components/SeleccionEstudio/SeleccionEstudio";
import { ToastAgenda } from "../../Components/ToastAgenda/ToastAgenda";

import { SelecFechaHoraTurno } from "../../Components/SelecFechaHoraTurno/SelecFechaHoraTurno";

export const Agenda = () => {
  const [dataFromMascota, setDataFromMascota] = useState("");
  const [dataFromServicio, setDataFromServicio] = useState("");
  const [dataFromFecha, setDataFromFecha] = useState("");

  // Función para recibir datos del componente hijo
  const receiveDataFromChild = (data) => {
    setDataFromMascota(data);
    setDataFromServicio(data);
    setDataFromFecha(data);
  };

  useEffect(() => {
    console.log("recibiendo mascota: ", dataFromMascota);
    console.log("recibiendo servicio: ", dataFromServicio);
  
  }, [dataFromMascota, dataFromServicio, dataFromFecha]);

  return (
    <div className="container w-4/5 mx-auto">
      <h1 className="py-5 mb-4 text-2xl font-extrabold leading-none tracking-tight text-center text-gray-500 md:text-5xl lg:text-4xl dark:text-white">
        Agenda
      </h1>
      <div className="flex place-content-around mb-10 mt-16 flex-wrap gap-2">
        <SeleccioneSuMascota
          sendDataToParent={receiveDataFromChild}
          className=" w-2/5"
        />
        <SeleccionEstudio
          sendDataToParent={receiveDataFromChild}
          className=" w-2/5 "
        />
        <SelecFechaHoraTurno sendDataToParent={receiveDataFromChild} />
      </div>
      <ToastAgenda />
    </div>
  );
};
