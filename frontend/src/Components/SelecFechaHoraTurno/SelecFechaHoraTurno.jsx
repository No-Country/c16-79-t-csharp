import { Label, Select, Datepicker } from "flowbite-react";
import { horasTurnos } from "./data/horas.js";
import { useEffect, useState } from "react";

export const SelecFechaHoraTurno = () => {
  const horasDisponibles = [...horasTurnos];

  const [fechaSeleccionada, setFechaSeleccionada] = useState();

  //Lógica para enviar datos al padre

  // const guardarFecha = (e) => {
  //   setFechaSeleccionada(e.target.value);
  // };

  useEffect(() => {
    console.log("fecha guardada: ", fechaSeleccionada);
    console.log("tipo de fecha: ", typeof fechaSeleccionada);
  }, [fechaSeleccionada]);

  return (
    <div className="container flex-col mx-auto w-96">
      <Datepicker 
      value={fechaSeleccionada} 
      onChange={(e)=>{setFechaSeleccionada(e)}} />
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Seleccione un horario" />
        </div>
        <Select id="countries" required>
          {horasDisponibles.map((d) => (
            <option key={d}>{d.hora}</option>
          ))}
        </Select>
      </div>
    </div>
  );
};
