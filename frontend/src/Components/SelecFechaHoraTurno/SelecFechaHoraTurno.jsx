
import { Label, Select, Datepicker } from "flowbite-react";
import { horasTurnos } from "./data/horas.js";

export const SelecFechaHoraTurno = () => {

const horasDisponibles = [...horasTurnos]

  return (
    <div className="container flex-col mx-auto w-96">
      <Datepicker />
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Seleccione un horario" />
        </div>
        <Select id="countries" required>
          {horasDisponibles.map(d => (
            <option key={d}>{d.hora}</option>
          ))}
        </Select>
      </div>
    </div>
  );
};
