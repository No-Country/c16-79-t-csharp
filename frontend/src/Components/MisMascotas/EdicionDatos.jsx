import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import editarMascotas from '../../Helpers/EditarMascotas'
import {CargarMascota} from '../MisMascotas/CargarMascota'
/* esta linea se agrega para eliminar el error de props validation --> */
/* eslint-disable react/prop-types */

const EdicionDatos = ({idMascotas}) => {
    const [openModal, setOpenModal] = useState(false);
/* Aca se esta llamando a la funcion del helper editarMascotas */
    const mascotaEncontrada = editarMascotas(idMascotas);

  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Editar Mascotas</Modal.Header>
        <Modal.Body>
          {/* si hay mascota encontrada pasa props a el form de cargar mascota para traer el mismo form que originalmente esta en blanco pero con los datos de la mascota de la card seleccionada  */}
            <CargarMascota nombre={mascotaEncontrada.nombre} raza={mascotaEncontrada.raza} tipo={mascotaEncontrada.tipo} edad={mascotaEncontrada.edad} peso={mascotaEncontrada.peso} ></CargarMascota>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Confirmar</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EdicionDatos
