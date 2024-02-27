
import {
    Button,
    Checkbox,
    FileInput,
    Label,
    Radio,
    RangeSlider,
    Select,
    Textarea,
    TextInput,
    ToggleSwitch,
} from 'flowbite-react';

import { uploadFile } from "../../Helpers/CargarImagen"
import { useState } from "react"

// console.log("nombre", nombre)
export const CargarMascota = ({ nombre, raza, tipo, edad, peso }) => {

    /* le paso por props los datos si encontro mascota en la bd sino el form queda en blanco para cargar nueva mascota */

    const [file, setFile] = useState(null)
    const [url, setUrl] = useState(null)
    console.log("url", url)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const validExtensions = ["jpg", "jpeg", "png", "gif"];
            const fileExtension = file.name.split('.').pop().toLowerCase();
            // console.log("fileExten", fileExtension)
            if (!validExtensions.includes(fileExtension)) {
                alert("Solo se permiten archivos de imagen.");
                return;
            }
            const result = await uploadFile(file)
            setUrl(result)
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="nombre" value="Nombre de tu mascota" />
                    </div>

                    {/* se pone temporalmente default value, para que sea editable se tiene que cambiar a value */}
                    <TextInput id="nombre" type="text" sizing="md" defaultValue={nombre} />
                </div>


                {/* Agrego condicional para que este campo solo aparezca en el form cuando no hay mascota cargada, si hay mascota cargada tiene tipo y si tiene tipo no trae el campo */}
                {tipo ? null : <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="tipo" value="Selecciona tipo de mascota" />
                    </div>
                    <Select id="tipo" required>
                        <option>Perro</option>
                        <option>Gato</option>
                        {/* <option>France</option> */}
                        {/* <option>Germany</option> */}
                    </Select>
                </div>}


                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="raza" value="Raza" />
                    </div>
                    <TextInput id="raza" type="text" sizing="md" defaultValue={raza} />
                </div>


                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="edad" value="Edad" />
                    </div>
                    <TextInput id="edad" type="number" min="0" max="30" sizing="md" defaultValue={edad} />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="peso" value="Peso" />
                    </div>
                    <TextInput id="peso" type="number" min="0" sizing="md" defaultValue={peso} />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="file-upload" value="Upload file" />
                    </div>
                    <FileInput id="file-upload" onChange={e => setFile(e.target.files[0])} />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
