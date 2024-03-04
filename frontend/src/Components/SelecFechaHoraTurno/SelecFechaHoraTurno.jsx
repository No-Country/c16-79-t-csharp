/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import { utcToZonedTime } from "date-fns-tz"

export const SelecFechaHoraTurno = ({sendDataToParent}) => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState();

  //Lógica para enviar datos al padre

  useEffect(() => {
    sendDataToParent(fechaSeleccionada); // Invocando la función del componente padre y pasando datos como argumento
    console.log("value fecha y hora: ", fechaSeleccionada);
  }, [fechaSeleccionada]);

  return (
    <div className="container flex-col mx-auto w-96">
      <DatePicker
        value={fechaSeleccionada}
        showTimeSelect
        showTimeInput
        filterTime={(time) => {
          const hour = time.getHours();
          return hour >= 8 && hour <= 20;
        }}
        onChange={(date) => {
          const utcDate = new Date(
            date.getTime() + date.getTimezoneOffset() * 60000
          );
          setFechaSeleccionada(utcDate.toISOString());
        }}
      />
    </div>
  );
};
