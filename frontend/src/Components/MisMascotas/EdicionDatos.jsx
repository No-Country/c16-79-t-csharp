import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import editarMascotas from '../../Helpers/EditarMascotas'

const EdicionDatos = (idMascotas) => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
            <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Editar Mascotas</Modal.Header>
        <Modal.Body>
            <p>
                {console.log(editarMascotas(idMascotas))} 
            </p>
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
