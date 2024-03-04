import { Button, FileInput, Label, Select, TextInput } from "flowbite-react";
import { uploadFile } from "../../Helpers/CargarImagen";
import { useEffect, useState } from "react";
import { useFetchPost } from "../../Helpers/useFetch";

/* eslint-disable react/prop-types */
export const CargarMascota = ({ nombre, raza, tipo, edad, peso }) => {
  /* le paso por props los datos si encontro mascota en la bd sino el form queda en blanco para cargar nueva mascota */

  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);


  /* Desde aca trabajo en la carga de datos */


  //useState para guardar el input que ira en el body del post
  const [input, setInput] = useState({
    name: "",
    type: "",
    race: "",
    birthday: "",
    weight: 0,
    photo: ""
  })
  //declaramos boton para habilitar y deshabilitar el submit
  const [boton, setBoton] = useState(true)
  //llamo a fetchData para armar el POST
  const { fetchData } = useFetchPost("api/ClientUsers/me/pets", input);

  //onChange que toma los valores completados en los campos menos la foto
  const actualizarDatos = (e) => {

    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));

  }

  let result;

  //agrego la foto
  const updateFotoUrl = async (e) => {
    e.preventDefault();
    try {
      const validExtensions = ["jpg", "jpeg", "png", "gif"];
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (!validExtensions.includes(fileExtension)) {
        alert("Solo se permiten archivos de imagen.");
        return;
      }
      result = await uploadFile(file);
      setUrl(result);
      console.log(result);
      setInput((prevInput) => ({
        ...prevInput,
        photo: result,
      }));
      console.log(input)
    } catch (error) {
      console.error(error);
    }
  }



    //creo el useEffect para las acciones posteriores a la carga de datos, dado que setState es asincronico 
    useEffect(() => {    
      const valoresInput = Object.values(input);
      const todosCompletos = valoresInput.some(valor => valor !== "");
      if(todosCompletos){
        if(url !== null){
          console.log(url)
          console.log("verificarPost")
          setBoton(false);
          fetchData()
          
        }
      }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, url])





  return (
    <>
      <h1 className="py-5 mb-4 text-2xl font-extrabold leading-none tracking-tight text-center text-gray-500 md:text-5xl lg:text-4xl dark:text-white">
        Carga una nueva mascota
      </h1>
      <div className="container flex justify-center w-full mt-10">
        <form
          className="flex max-w-md flex-col gap-4" /* onSubmit={handleSubmit} */
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nombre" value="Nombre de tu mascota" />
            </div>

            {/* se pone temporalmente default value, para que sea editable se tiene que cambiar a value */}
            <TextInput
              id="nombre"
              name="name"
              type="text"
              sizing="md"
              defaultValue={nombre}
              onChange={actualizarDatos}

            />
          </div>

          {/* Agrego condicional para que este campo solo aparezca en el form cuando no hay mascota cargada, si hay mascota cargada tiene tipo y si tiene tipo no trae el campo */}
          {tipo ? null : (
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="tipo" value="Selecciona tipo de mascota" />
              </div>

              <Select id="tipo" name="type" required onChange={actualizarDatos}>
                <option>Seleccionar opcion</option>
                <option>Perro</option>
                <option>Gato</option>
              </Select>
            </div>
          )}

          <div>
            <div className="mb-2 block">
              <Label htmlFor="raza" value="Raza" />
            </div>
            <TextInput
              id="raza"
              name="race"
              type="text"
              sizing="md"
              defaultValue={raza}
              onChange={actualizarDatos}
            />
          </div>


          {/* TODO: no contamos con campo edad en este momento en la base se hablo con back para que se traiga este campo calculado, ellos quieren que ingresemos fecha de nacimiento con formato dd/mm/yyyy */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="edad" value="Edad" />
            </div>
            <TextInput
              id="edad"
              type="number"
              min="0"
              max="30"
              sizing="md"
              defaultValue={edad}
            />
          </div>

          {/* campo birthday agregado para ingresar el body necesario */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="birthday" value="Nacimiento" />
            </div>
            <TextInput
              id="birthday"
              type="text"
              sizing="md"
              name="birthday"
              onChange={actualizarDatos}
              placeholder="formato: dd/mm/aaaa"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="peso" value="Peso" />
            </div>
            <TextInput
              id="peso"
              type="number"
              min="0"
              sizing="md"
              defaultValue={peso}
              name="weight"
              onChange={actualizarDatos}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Upload file" />
            </div>
            <FileInput
              id="file-upload"
              onChange={(e) => setFile(e.target.files[0])}
              name="photo"
            />
            <Button color="light" onClick={updateFotoUrl}>Cargar Foto</Button>
          </div>
          <Button type="submit" disabled={boton}>Guardar</Button>
        </form>
      </div>

    </>
  );
};
