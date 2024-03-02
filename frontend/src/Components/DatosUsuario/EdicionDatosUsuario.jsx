/* eslint-disable react/prop-types */
"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useRef } from "react";
 import { useFetchPut } from "../../Helpers/useFetch";

export const EdicionDatosUsuario = ({
  nombre,
  telefono,
  name,
  lastName,
}) => {
  // console.log(nombreUsuario, telefono)

  const inputRefname = useRef(null);
  const inputReftel = useRef(null);

//   const method = "PUT";

  const [openModal, setOpenModal] = useState(false);

  const [input, setInput] = useState({
    userName: "",
    phoneNumber: "",
    name: name,
    lastName: lastName,
  });

  const { fetchData } = useFetchPut("api/ClientUsers/me", input);

  const editarDatos = async () => {
    setInput({
      ...input,
      userName: inputRefname.current.value,
      phoneNumber: inputReftel.current.value,
      name: name,
      lastName: lastName,
    });
    return await fetchData();
  };

  console.log("inputttt : ",input);

  //   const actualizarDatos = (e) => {
  //     const telefonoValue = inputRef.current.value;

  //     if (e.target.name == "nombreusuario") {
  //       setInput({
  //         ...input,
  //         [e.target.name]: e.target.value,
  //         telefono: telefonoValue,
  //       });
  //     } else {
  //       setInput({
  //         ...input,
  //         [e.target.name]: e.target.value,
  //         nombreusuario: input.nombreusuario,
  //       });
  //     }
  //   };

  function onCloseModal() {
    setOpenModal(false);
    // setEmail('');
  }
  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Editar datos</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edición de datos
            </h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Nombre Usuario" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                defaultValue={nombre}
                // onChange={actualizarDatos}
                required
                name="nombreusuario"
                ref={inputRefname}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Teléfono" />
              </div>
              <TextInput
                id="password"
                type="text"
                required
                defaultValue={telefono}
                name="telefono"
                // onChange={actualizarDatos}
                ref={inputReftel}
              />
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>

            <div className="w-full">
              <Button onClick={editarDatos}>Guardar cambios</Button>
            </div>

            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};