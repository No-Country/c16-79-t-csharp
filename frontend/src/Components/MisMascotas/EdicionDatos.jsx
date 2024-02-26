import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import editarMascotas from '../../Helpers/EditarMascotas'
import { CargarMascota } from './CargarMascota';

const EdicionDatos = ({ idMascotas }) => {
  // console.log("idmascota", idMascotas)
  const [openModal, setOpenModal] = useState(false);
  const mascota = editarMascotas(idMascotas)
  // console.log("mascota", mascota)
  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Editar</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Editar Mascotas</Modal.Header>
        <Modal.Body>
          <CargarMascota nombre={mascota.nombre} raza={mascota.raza} tipo={mascota.tipo} edad={mascota.edad} peso={mascota.peso} foto={mascota.foto}/>
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
