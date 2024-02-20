
'use client';

import { Card } from 'flowbite-react';
import data from '/src/json/data.json'

const ProductoDestacados = () => {

  return (
    <>
      <h1 className='text-center text-4xl'>Destacados</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center ">
        {/* {
          data.map(il => (
            <h1>{il.nombre}</h1>
          ))
        } */}
        {data.map((producto, index) => (
          <Card
            className="mb-5 w-72"
            key={index}
            imgAlt={producto.nombre}
            imgSrc={producto.imagen}

          >
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {producto.nombre}
              </h5>
            </a>
            <p className="text-gray-700 dark:text-gray-300">{producto.descripcion}</p>
            {/* <p className="text-gray-700 dark:text-gray-300">Categoría: {producto.categoria}</p> */}
            {/* <p className="text-gray-700 dark:text-gray-300">Stock: {producto.stock}</p> */}
            <div className="flex items-center ">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${producto.precio}</span>
              <a
                href="#"
                className="ml-auto rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add to cart
              </a>
            </div>
          </Card>
        ))}
      </div>
    </>

  )
}

export default ProductoDestacados

