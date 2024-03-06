/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import { utcToZonedTime } from "date-fns-tz"

export const SelecFechaHoraTurno = ({ sendDataToParent }) => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState();
  const [capturarFecha, setCapturarFecha] = useState();
  const [mostrarFecha, setMostrarFecha] = useState();
  const [capturarHora, setCapturarHora] = useState();
  const [mostrarHora, setMostrarHora] = useState();

  //Lógica para enviar datos al padre

  useEffect(() => {
    sendDataToParent(fechaSeleccionada); // Invocando la función del componente padre y pasando datos como argumento
    console.log("value fecha y hora: ", fechaSeleccionada);
  }, [fechaSeleccionada]);

  return (
    <div className="container flex-col mx-auto w-96">
      <div className="mb-2 block">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {" "}
          Seleccione una fecha y hora
        </p>
      </div>
      <div className="container flex">
        <DatePicker
          value={mostrarFecha}
          onChange={(date) => {
            const utcDate = new Date(date.getTime());
            setMostrarFecha(utcDate.toLocaleDateString());
            setCapturarFecha(date);
          }}
        ></DatePicker>

        <DatePicker
          value={mostrarHora}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30} // Opcional: especifica los intervalos de tiempo disponibles (en minutos)
          dateFormat="h:mm aa" // Opcional: formato de la hora
          onChange={(date) => {
            setMostrarHora(
              `${date.getHours().toString().padStart(2, "0")}:${date
                .getMinutes()
                .toString()
                .padStart(2, "0")}`
            );
            setCapturarHora(date);
          }}
        />
      </div>
      <Button
        className=" mt-5"
        onClick={() => {
          // Obtenemos los componentes de fecha de la primera fecha
          const dia = capturarFecha.getDate();
          const mes = capturarFecha.getMonth();
          const anio = capturarFecha.getFullYear();

          // Obtenemos los componentes de tiempo de la segunda fecha
          const hora = capturarHora.getHours();
          const minutos = capturarHora.getMinutes();
          const segundos = capturarHora.getSeconds();

          const nuevaFecha = new Date(anio, mes, dia, hora, minutos, segundos);

          setFechaSeleccionada(new Date(nuevaFecha.toUTCString()).toISOString());
          console.log("fecha completa: ", capturarHora);
          console.log("fecha nueva: ", nuevaFecha);
          console.log("fecha iso: ", new Date(nuevaFecha.toUTCString()).toISOString());
        }}
      >
        Agendar fecha y hora
      </Button>
    </div>
  );
};
