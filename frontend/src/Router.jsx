/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Catalogo } from "./Pages/Catalogo/Catalogo";
import { Adoptar } from "./Pages/Adoptar/Adoptar";
import { Agenda } from "./Pages/Agenda/Agenda";
import { Servicios } from "./Pages/Servicios/Servicios";
import { PerdidosEncontrados } from "./Pages/Perdidos-Encontrados/PerdidosEncontrados";
import { QuieneSomos } from "./Pages/QuienesSomos/QuieneSomos";
import { Perfil } from './Pages/Perfil/Perfil'
import { Login } from "./Pages/Login/Login";
import { Registro } from "./Pages/Registro/Registro";


import { useFetchGet } from "./Helpers/useFetch.js"
import { useEffect, useState } from "react";

export const Router = () => {

  const [info, setInfo] = useState([]);

  // console.log("info", info)

  const { fetchData } = useFetchGet("api/ClientUsers/me/pets");

  useEffect(() => {
    const handleDatos = async () => {
      if (localStorage.getItem("token")) {
        try {
          const respuesta = await fetchData();
          // console.log("Data received:", respuesta.data);
          const pruebaRes = respuesta.data;
          console.log("pruebaRes", pruebaRes);
          setInfo(pruebaRes);
          console.log("nombre mascota desde id: ", info);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    handleDatos();
    // console.log("pruegaRes: ", info)
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil mascotasData={info} />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/adoptar" element={<Adoptar />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/perdidos-Encontrados" element={<PerdidosEncontrados />} />
      <Route path="/quienesSomos" element={<QuieneSomos />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registro" element={<Registro/>} />

    </Routes>
  );
};
