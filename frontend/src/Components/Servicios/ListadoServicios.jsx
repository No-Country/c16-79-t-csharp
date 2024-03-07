"use client";
import './ListadoServicios.css'

import { Table } from "flowbite-react";
export const ListadoServicios = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <Table striped >
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:bg-gray-800">
              <Table.Cell>
                <h6>Registro de Usuarios</h6>
                <p>
                Crea tu cuenta personalizada para acceder a nuestros servicios exclusivos y recibir actualizaciones especializadas sobre la salud y el bienestar de tus mascotas.
                </p>
              </Table.Cell>
              <Table.Cell>
                {" "}
                <h6>Agenda de Atención Médica</h6>
                <p>
                Programa fácilmente consultas, vacunaciones, cirugías y otros servicios médicos para tu mascota a través de nuestra agenda en línea, diseñada para adaptarse a tus necesidades y preferencias.
                </p>{" "}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <h6>Seguimiento Detallado de Historial Médico</h6>
                <p>
                Accede a los resultados de los estudios médicos realizados a tu mascota y mantente informado de manera detallada sobre su estado de salud y los tratamientos recomendados.
                </p>{" "}
              </Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>               {" "}
                <h6>Registro de Datos de tu Mascota</h6>
                <p>
                Mantén un registro completo y actualizado de los datos de tu mascota, incluyendo historial médico, vacunas, tratamientos y más, para una mejor gestión de su salud y bienestar.
                </p>{" "}</Table.Cell>
              <Table.Cell>
                <img id="perros" src="perros.jpg" alt="imagen de perros" />
              </Table.Cell>
              <Table.Cell>
                {" "}
                <h6>Cancelación de Citas</h6>
                <p>
                Si necesitas cancelar una cita previamente programada, puedes hacerlo de manera rápida y sencilla a través de nuestra plataforma en línea, facilitando la gestión de tu agenda.
                </p>{" "}
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell></Table.Cell>
              <Table.Cell>
                {" "}
                <h6>Catalogo de productos</h6>
                <p>
                  Listado de los productos disponibles a la venta para tus mascotas en nuestro local. Puedes encontrar estos y muchos mas en tu visita para mimar a tus peluditos. 
                </p>{" "}
              </Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
};
