/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Select, Label } from "flowbite-react";
import { useFetchGet } from "../../Helpers/useFetch";
import { useEffect, useState } from "react";

const SeleccionEstudio = ({ sendDataToParent }) => {
  const [info, setInfo] = useState([]);
  const [valueEstudio, setValueEstudio] = useState();
  console.log("info", info);

  const { fetchData } = useFetchGet("api/Services");

  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const respuesta = await fetchData();
          const pruebaRes = respuesta.data;
          setInfo(pruebaRes);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    handleDatos();
  }, []);

  //Lógica para enviar datos al padre
  const sendData = (e) => {
    setValueEstudio(e.target.value);
  };

  useEffect(() => {
    sendDataToParent(valueEstudio); // Invocando la función del componente padre y pasando datos como argumento
    console.log("value estudio: ", valueEstudio);
  }, [valueEstudio]);




  return (
    <div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Select your country" />
        </div>
        <Select id="countries" required onChange={sendData}>
          <option>--</option>
          {info.length > 0 ? (
            info?.map((d) => {
              return <option value={d.id} key={d.id}>{d.type}</option>;
            })
          ) : (
            <option>No tiene tipos cargados </option>
          )}
        </Select>
      </div>
    </div>
  );
};

export default SeleccionEstudio;
