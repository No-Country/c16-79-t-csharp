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
      <DatePicker
  value={mostrarFecha}
  onChange={(date) => {
    const selectedDay = date.getDay(); // Obtener el día de la semana seleccionado
    if (selectedDay !== 0 && selectedDay !== 6) { // Validar si no es sábado (0) ni domingo (6)
      const utcDate = new Date(date.getTime());
      setMostrarFecha(utcDate.toLocaleDateString());
      setCapturarFecha(date);
    } else {
      // Aquí puedes manejar la lógica para informar al usuario que no puede seleccionar días de fin de semana
      alert("No puedes seleccionar turnos los fines de semana");
    }
  }}
  filterDate={(date) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6; // Filtrar días de fin de semana
  }}
/>

<DatePicker
  value={mostrarHora}
  showTimeSelect
  showTimeSelectOnly
  timeIntervals={30}
  dateFormat="h:mm aa"
  minTime={new Date("1970-01-01T08:00:00")} // Establecer la hora mínima
  maxTime={new Date("1970-01-01T22:00:00")} // Establecer la hora máxima
  onChange={(date) => {
    setMostrarHora(
      `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
    );
    setCapturarHora(date);
  }}
/>

<Button
  className=" mt-5"
  onClick={() => {
    if (capturarFecha && capturarHora) { // Verificar si se ha seleccionado fecha y hora
      const selectedDay = capturarFecha.getDay(); // Obtener el día de la semana seleccionado
      const selectedHour = capturarHora.getHours(); // Obtener la hora seleccionada
      if (selectedDay !== 0 && selectedDay !== 6 && selectedHour >= 8 && selectedHour <= 22) {
        // Si no es fin de semana y la hora está entre 8 am y 10 pm
        const nuevaFecha = new Date(
          capturarFecha.getFullYear(),
          capturarFecha.getMonth(),
          capturarFecha.getDate(),
          capturarHora.getHours(),
          capturarHora.getMinutes(),
          capturarHora.getSeconds()
        );

        setFechaSeleccionada(nuevaFecha.toISOString());
        console.log("fecha completa: ", nuevaFecha);
        console.log("fecha iso: ", nuevaFecha.toISOString());
      } else {
        // Aquí puedes manejar la lógica para informar al usuario que debe seleccionar dentro del rango permitido
        alert("Debes seleccionar una fecha y hora dentro del rango permitido");
      }
    } else {
      // Aquí puedes manejar la lógica para informar al usuario que debe seleccionar fecha y hora
      alert("Debes seleccionar una fecha y hora");
    }
  }}
>
  Agendar fecha y hora
</Button>

    </div>
  );
};
