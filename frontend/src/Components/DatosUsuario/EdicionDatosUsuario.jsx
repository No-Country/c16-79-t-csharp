/* eslint-disable react/prop-types */
"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useFetchPut } from "../../Helpers/useFetch";

export const EdicionDatosUsuario = ({
  nombre,
  telefono,
  name,
  lastName,
}) => {

  const inputRefname = useRef();
  const inputReftel = useRef();

  const [openModal, setOpenModal] = useState(false);

  const [input, setInput] = useState({
    userName: nombre,
    phoneNumber: telefono,
    name,
    lastName,
  });

  console.log("inputttt : ", input);
  // console.log("state : ", state);


  const actualizarDatos = () => {
    setInput(input => ({
      ...input,
      name: name,
      lastName: lastName
    }))
  }

  useEffect(() => {
    setInput(prevInput => ({
      ...prevInput,
      // userName: inputRefname?.current?.value,
      // phoneNumber: inputReftel?.current?.value,
      name: name,
      lastName: lastName,
    }));
  }, [name, lastName]);

  function onCloseModal() {
    setOpenModal(false);
    // setEmail('');
  }

  const editarDatos = async () => {
    setInput(input => ({
      ...input,
      userName: inputRefname.current.value,
      phoneNumber: inputReftel.current.value,
      // name: input.name,
      // lastName: input.lastName,
    }));
    await fetchData();
    setOpenModal(false);
  };
  const { state, fetchData } = useFetchPut("api/ClientUsers/me", input);

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
                onChange={actualizarDatos}
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
                onChange={actualizarDatos}
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