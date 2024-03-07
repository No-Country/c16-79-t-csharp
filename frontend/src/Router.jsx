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


export const Router = () => {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
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
