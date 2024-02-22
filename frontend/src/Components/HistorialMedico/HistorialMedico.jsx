import { Accordion } from 'flowbite-react';

export const HistorialMedico = () => {
  return (
    <>
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Vacunas</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Tipo de vacuna, fecha de administración, próxima dosis
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Medicamentos</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Nombre del medicamento, dosis, frecuencia, motivo de prescripción
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Cirugías o procedimientos realizados</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Descripción, fecha
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Enfermedades previas</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Descripción, tratamiento realizado
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Tratamientos antiparasitarios</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Tipo de tratamiento, fecha de administración, próxima dosis
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Notas Adicionales</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Notas adicionales o comentarios
          </p>

        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </>
  )
}
