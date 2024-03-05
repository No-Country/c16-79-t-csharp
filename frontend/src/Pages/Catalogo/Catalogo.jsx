import { Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useFetchGet } from "../../Helpers/useFetch";

export const Catalogo = () => {

  const [productos, setProductos] = useState([])

  console.log("productos:", productos);
  // console.log("first", first)

  const { fetchData } = useFetchGet("api/Products")

  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const data = await fetchData()
          console.log("Data received:", data);
          setProductos(data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    };
    handleDatos();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {/* <h1 className='text-center text-4xl'>Destacados</h1> */}

      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center "> */}
      <h1 className=" pt-8 mb-0 font-extrabold leading-none tracking-tight text-center text-gray-500 md:text-2xl lg:text-4xl dark:text-white">
        Productos de nuestro shop
      </h1>
      <div className="container mx-auto py-10 px-8 max-w-6xl">

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {productos.data?.map(({ id, name, image, description, categories, stock, price }) => (
            <Card
              className="mb-5 cardProducto"
              key={id}
              imgAlt={name}
              imgSrc={image}
            >
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-14">
                  {name}
                </h5>
              </a>
              <p className="text-gray-700 dark:text-gray-300 h-14">
                {description}
              </p>
              <p className="text-gray-700 dark:text-gray-300">Categoría: {categories.map(e => e.name)}</p>
              <p className="text-gray-700 dark:text-gray-300">Stock: {stock}</p>
              <div className="flex flex-col items-center ">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                {/* <a
                  href="#"
                  className=" m-5 mb-0 rounded-lg bg-cyan-700 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Agregar al carrito
                </a> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>

  )
}