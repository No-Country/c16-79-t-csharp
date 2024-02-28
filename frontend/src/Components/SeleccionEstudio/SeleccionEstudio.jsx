import { Dropdown } from 'flowbite-react';

const SeleccionEstudio = () => {
  return (
    <div>
          <Dropdown label="Consulta Medica" dismissOnClick={false}>
      <Dropdown.Item>Vacunación</Dropdown.Item>
      <Dropdown.Item>Analisis De Sangre</Dropdown.Item>
      <Dropdown.Item>Ecografia</Dropdown.Item>
      <Dropdown.Item>Corte De Pelo</Dropdown.Item>
    </Dropdown>
    </div>
  )
}

export default SeleccionEstudio
