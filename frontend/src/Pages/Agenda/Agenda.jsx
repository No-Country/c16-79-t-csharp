import { useEffect, useState } from "react";
import { SeleccioneSuMascota } from "../../Components/SeleccioneSuMacosta/SeleccioneSuMascota";
import SeleccionEstudio from "../../Components/SeleccionEstudio/SeleccionEstudio";
import { ToastAgenda } from "../../Components/ToastAgenda/ToastAgenda";
import { useFetchPost } from "../../Helpers/useFetch";
import { SelecFechaHoraTurno } from "../../Components/SelecFechaHoraTurno/SelecFechaHoraTurno";

export const Agenda = () => {
  const [dataFromMascota, setDataFromMascota] = useState("");
  const [dataFromServicio, setDataFromServicio] = useState("");
  const [dataFromFecha, setDataFromFecha] = useState("");

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

  // useEffect(() => {
  //   console.log("recibiendo mascota: ", dataFromMascota);
  //   console.log("recibiendo servicio: ", dataFromServicio);
  //   console.log("recibiendo fecha y hora: ", dataFromFecha);
  // }, [dataFromMascota, dataFromServicio, dataFromFecha]);

  // Lógica del POST

  //useState para guardar el input que ira en el body del post
  const [input, setInput] = useState({
    time: null,
    serviceId: null,
    petId: null,
  });
  //declaramos boton para habilitar y deshabilitar el submit
  // const [boton, setBoton] = useState(true)
  //llamo a fetchData para armar el POST
  const { fetchData } = useFetchPost("api/Dates", input);

  //creo el useEffect para las acciones posteriores a la carga de datos, dado que setState es asincronico

  // console.log("input",input)
  // useEffect(() => {
  //   setInput( {
  //     time: receiveDataFromMascota,
  //     serviceId: receiveDataFromServicio,
  //     petId: receiveDataFromFecha,
  //   });
  //   const valoresInput = Object.values(input);
  //   console.log("valores inputs: ", valoresInput)
  //   const todosCompletos = valoresInput.some((valor) => valor !== null);
  //   if (todosCompletos) {
  //     fetchData();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    const todosCompletos = dataFromMascota !== null && dataFromServicio !== null && dataFromFecha !== null;
    if (todosCompletos) {
      setInput({
        time: dataFromFecha,
        serviceId: dataFromServicio,
        petId: dataFromMascota,
      });
      // fetchData();
    }
  }, [dataFromFecha, dataFromServicio, dataFromMadascota]);

  console.log(input)
  const handlePost = () => {
    fetchData();
  }

  return (
    <div className="container w-4/5 mx-auto">
      <h1 className="py-5 mb-4 text-2xl font-extrabold leading-none tracking-tight text-center text-gray-500 md:text-5xl lg:text-4xl dark:text-white">
        Agenda
      </h1>
      <button onClick={handlePost}>
        agendar
      </button>
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
      <ToastAgenda />
    </div>
  );
};
