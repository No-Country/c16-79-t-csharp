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
  }, [fechaSeleccionada]);

  return (
    <div className="container w-2/5 flex-col mx-auto justify-around flex-wrap ">
      <div className="mb-2 block">
        <p className="text-sm font-medium text-gray-900 dark:text-white pt-1">
          {" "}
          Seleccione una fecha y hora
        </p>
      </div>
      <div className="container flex gap-2">
      <DatePicker
      className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
        placeholderText="Ingrese la Fecha"
        value={mostrarFecha}
        onChange={(date) => {
          const today = new Date(); // Obtener la fecha actual
          if (date >= today) {
            // Verificar si la fecha seleccionada es hoy o en el futuro
            const selectedDay = date.getDay();
            if (selectedDay !== 0 && selectedDay !== 6) {
              const utcDate = new Date(date.getTime());
              setMostrarFecha(utcDate.toLocaleDateString());
              setCapturarFecha(date);
            } else {
              alert("No puedes seleccionar turnos los fines de semana");
            }
          } else {
            alert("No puedes seleccionar fechas pasadas"); // Mostrar alerta si se selecciona una fecha pasada
          }
        }}
        minDate={new Date()} // Establecer la fecha mínima como la fecha actual
        filterDate={(date) => {
          const dayOfWeek = date.getDay();
          return dayOfWeek !== 0 && dayOfWeek !== 6;
        }}
      />

      <DatePicker
      className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
        placeholderText="Ingrese La Hora"
        value={mostrarHora}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        dateFormat="h:mm aa"
        minTime={new Date("1970-01-01T08:00:00")} // Establecer la hora mínima
        maxTime={new Date("1970-01-01T22:00:00")} // Establecer la hora máxima
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
        className="mt-5 mx-auto"
        onClick={() => {
          if (capturarFecha && capturarHora) {
            // Verificar si se ha seleccionado fecha y hora
            const selectedDay = capturarFecha.getDay(); // Obtener el día de la semana seleccionado
            const selectedHour = capturarHora.getHours(); // Obtener la hora seleccionada
            if (
              selectedDay !== 0 &&
              selectedDay !== 6 &&
              selectedHour >= 8 &&
              selectedHour <= 22
            ) {
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
            } else {
              // Aquí puedes manejar la lógica para informar al usuario que debe seleccionar dentro del rango permitido
              alert(
                "Debes seleccionar una fecha y hora dentro del rango permitido"
              );
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
