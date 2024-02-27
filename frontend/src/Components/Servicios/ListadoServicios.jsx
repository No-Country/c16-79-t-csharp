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
                  Crea tu cuenta para acceder a nuestros servicios y recibir
                  actualizaciones personalizadas sobre la salud de tus mascotas.
                </p>
              </Table.Cell>
              <Table.Cell>
                {" "}
                <h6>Agenda de Estudios</h6>
                <p>
                  Programa fácilmente consultas, vacunaciones, cirugías u otros
                  estudios médicos para tu mascota a través de nuestra agenda en
                  línea.
                </p>{" "}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <h6>Tienda online</h6>
                <p>
                  Explora nuestra tienda en línea, donde encontrarás una amplia
                  gama de productos y alimentos de calidad para el cuidado de
                  tus mascotas.
                </p>{" "}
              </Table.Cell>
            </Table.Row>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>               {" "}
                <h6>Adoptar una Mascota o Registrarse como Adoptante</h6>
                <p>
                  ¿Estás buscando un nuevo amigo peludo? Explora nuestras opciones de adopción o regístrate como adoptante para ayudar a una mascota necesitada a encontrar un hogar amoroso.
                </p>{" "}</Table.Cell>
              <Table.Cell>
                <img id="perros" src="perros.jpg" alt="imagen de perros" />
              </Table.Cell>
              <Table.Cell>
                {" "}
                <h6>Seguimiento de Resultados de Estudios</h6>
                <p>
                  Accede a los resultados de los estudios realizados a tu mascota y mantente informado sobre su estado de salud.
                </p>{" "}
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell></Table.Cell>
              <Table.Cell>
                {" "}
                <h6>Mascotas Perdidas y Encontradas</h6>
                <p>
                  En caso de que tu mascota se haya perdido o encuentres una mascota perdida, utiliza nuestra sección dedicada para ayudar a reunir a las mascotas con sus familias.
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
