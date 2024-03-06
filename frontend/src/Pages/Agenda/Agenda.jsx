// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect, useState } from "react";
import { SeleccioneSuMascota } from "../../Components/SeleccioneSuMacosta/SeleccioneSuMascota";
import SeleccionEstudio from "../../Components/SeleccionEstudio/SeleccionEstudio";
// import { ToastAgenda } from "../../Components/ToastAgenda/ToastAgenda";
import { useFetchPost } from "../../Helpers/useFetch";
import { SelecFechaHoraTurno } from "../../Components/SelecFechaHoraTurno/SelecFechaHoraTurno";
import { Button, Toast } from "flowbite-react";
import { HiFire } from "react-icons/hi";

export const Agenda = () => {
  const [dataFromMascota, setDataFromMascota] = useState("");
  const [dataFromServicio, setDataFromServicio] = useState("");
  const [dataFromFecha, setDataFromFecha] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Función para recibir datos del componente hijo
  const receiveDataFromMascota = (dataM) => {
    setDataFromMascota(dataM);
  };

  const receiveDataFromServicio = (dataS) => {
    setDataFromServicio(dataS);
  };

  const receiveDataFromFecha = (dataF) => {
    setDataFromFecha(dataF);
  };

  useEffect(() => {
    console.log("recibiendo mascota: ", dataFromMascota);
    console.log("recibiendo servicio: ", dataFromServicio);
    console.log("recibiendo fecha y hora: ", dataFromFecha);
  }, [dataFromMascota, dataFromServicio, dataFromFecha]);

  // Lógica del POST

  //useState para guardar el input que ira en el body del post
  const [input, setInput] = useState({
    petId: null,
    serviceId: null,
    time: null,
  });
  //declaramos boton para habilitar y deshabilitar el submit
  // const [boton, setBoton] = useState(true)
  //llamo a fetchData para armar el POST
  const { fetchData } = useFetchPost("api/Dates", input);

  //creo el useEffect para las acciones posteriores a la carga de datos, dado que setState es asincronico
  useEffect(() => {
    setInput({
      petId: dataFromMascota,
      serviceId: dataFromServicio,
      time: dataFromFecha,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFromFecha, dataFromMascota, dataFromServicio]);

  const guardarAgenda = () => {
    const valoresInput = Object.values(input);
    console.log("valores inputs y la concha de t: ");
    console.log("input en guardar agenda: ", input);
    const todosCompletos = valoresInput.some((valor) => valor !== null);
    if (todosCompletos) {
      fetchData();
    }
  };

  const handleClick = () => {
    setShowToast((state) => !state);
    guardarAgenda();
    window.location.reload()
  };

  return (
    <div className="container w-4/5 mx-auto">
      <h1 className="py-5 mb-4 text-2xl font-extrabold leading-none tracking-tight text-center text-gray-500 md:text-5xl lg:text-4xl dark:text-white">
        Agenda
      </h1>
      <div className="flex place-content-around mb-10 mt-16 flex-wrap gap-2">
        <SeleccioneSuMascota
          sendDataToParent={receiveDataFromMascota}
          className=" w-2/5"
        />
        <SeleccionEstudio
          sendDataToParent={receiveDataFromServicio}
          className=" w-2/5 "
        />
        <SelecFechaHoraTurno sendDataToParent={receiveDataFromFecha} />
      </div>
      {/* <ToastAgenda /> */}
      <div className="flex justify-center">
        <div className="flex space-y-4">
          <Button onClick={handleClick}>Agendar</Button>
          {showToast && (
            <Toast className="fixed top-20 right-5 bg-purple-100">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                <HiFire className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">
                Cita agendada con éxito!
              </div>
              <Toast.Toggle onDismiss={() => setShowToast(false)} />
            </Toast>
          )}
        </div>
      </div>
    </div>
  );
};