/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useFetchPut } from "../../Helpers/useFetch";

export const EdicionDatosUsuario = ({
  nombre,
  telefono,
  nombreUsu,
  apellido,
}) => {
  // usamos useState para controlar el estado del input del formulario.
  const [input, setInput] = useState({
    userName: "",
    phoneNumber: "",
    name: "",
    lastName: "",
  });

  //usamos useref para referenciar el campo que vamos a cambiar(hablando de los inputs del modal)
  const inputRefName = useRef(null);
  const inputRefApellido = useRef(null);
  const inputRefUserName = useRef(null);
  const inputRefTel = useRef(null);

  const [openModal, setOpenModal] = useState(false);

  //desestructuro lo que necesito del usefetchput
  const { fetchData } = useFetchPut("api/ClientUsers/me", input);

  //funcion dentro del  onClick para guardar los datos editados
  const editarDatos = async () => {
    console.log(
      "lognuevo",
      usuarioValue,
      telefonoValue,
      nombreValue,
      apellidoValue
    );
    //pasa los campos editables al body del custom hook
    setInput((prevInput) => ({
      ...prevInput,
      name: nombreValue,
      lastName: apellidoValue,
      userName: usuarioValue,
      phoneNumber: telefonoValue,
    }));
  };

  //con este useffect puedo obtener telefono y nombre usuario y puedo editarlos, tambien cierra el modal, hace el timeout hace el reload para tener devuelta el get
  useEffect(() => {
    //evalua que el valor del array no sea "", si esta condicion se cumple ejecuta el fetchdata,setopenmodal y settimeout
    //el settimeout se hace para que refresque la pagina con los datos actualizados
    if (Object.values(input).some((value) => value !== "")) {
      fetchData();
      setOpenModal(false);
      setTimeout(() => {
        window.location.reload();
      }, "1000");
    }
  }, [input]);

  //declaro variables para los campos editables

  let nombreValue;
  let apellidoValue;
  let telefonoValue;
  let usuarioValue;

  const actualizarDatos = () => {
    //este el onchange que lee el valor de los inputs despues de haberlos cambiado y los guarda en las variables que declare arriba

    nombreValue = inputRefName.current.value;
    apellidoValue = inputRefApellido.current.value;
    telefonoValue = inputRefTel.current.value;
    usuarioValue = inputRefUserName.current.value;
  };

  function onCloseModal() {
    setOpenModal(false);
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
                <Label htmlFor="name" value="Nombre" />
              </div>
              <TextInput
                id="name"
                placeholder="Nombre"
                defaultValue={nombre}
                onChange={actualizarDatos}
                required
                name="nombre"
                ref={inputRefName}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Apellido" />
              </div>
              <TextInput
                id="apellido"
                placeholder="Apellido"
                defaultValue={apellido}
                onChange={actualizarDatos}
                required
                name="Apellido"
                ref={inputRefApellido}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Nombre Usuario" />
              </div>
              <TextInput
                id="username"
                placeholder="Nombre de usuario"
                defaultValue={nombreUsu}
                onChange={actualizarDatos}
                required
                name="nombreusuario"
                ref={inputRefUserName}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="phonenumber" value="Teléfono" />
              </div>
              <TextInput
                id="phonenumber"
                type="text"
                required
                defaultValue={telefono}
                name="telefono"
                onChange={actualizarDatos}
                ref={inputRefTel}
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
