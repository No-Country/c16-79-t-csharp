/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import { utcToZonedTime } from "date-fns-tz"

export const SelecFechaHoraTurno = ({ sendDataToParent }) => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState();

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
        value={fechaSeleccionada}
        selected={fechaSeleccionada}
        dateFormatCalendar="dd/mm/yyyy"
        // showTimeSelect
        // showTimeInput
        // filterTime={(time) => {
        //   const hour = time.getHours();
        //   return hour >= 8 && hour <= 20;
        // }}
        onChange={(date) => {
          const utcDate = new Date(date.getTime());
          setFechaSeleccionada(utcDate.toDateString());
        }}
      >
      {/* <button onClick={(date) => {
          const utcDate = new Date(date.getTime() + date.getTimezoneOffset());
          setFechaSeleccionada(utcDate.toISOString());
        }}>Agendar fecha y hora</button> */}
      </DatePicker>
      <DatePicker
        value={fechaSeleccionada}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30} // Opcional: especifica los intervalos de tiempo disponibles (en minutos)
        dateFormat="h:mm aa" // Opcional: formato de la hora
        onChange={(date) => {
          const utcDate = new Date(date.getTimezoneOffset())
          setFechaSeleccionada(utcDate.toDateString());
        }}
      />
      </div>
    </div>
  );
};
