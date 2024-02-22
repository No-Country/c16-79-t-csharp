
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

export const CargarMascota = () => {

    const [file, setFile] = useState(null)
    const [url, setUrl] = useState(null)
    // console.log("url", url)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
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
                    <TextInput id="nombre" type="text" sizing="md" />
                </div>


                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="tipo" value="Selecciona tipo de mascota" />
                    </div>
                    <Select id="tipo" required>
                        <option>Perro</option>
                        <option>Gato</option>
                        {/* <option>France</option> */}
                        {/* <option>Germany</option> */}
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="raza" value="Raza" />
                    </div>
                    <TextInput id="raza" type="text" sizing="md" />
                </div>


                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="edad" value="Edad" />
                    </div>
                    <TextInput id="edad" type="number" min="0" max="30" sizing="md" />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="peso" value="Peso" />
                    </div>
                    <TextInput id="peso" type="number" min="0" sizing="md" />
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
