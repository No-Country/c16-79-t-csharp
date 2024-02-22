import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Tienda } from "./Pages/Tienda/Tienda";
import { Adoptar } from "./Pages/Adoptar/Adoptar";
import { Agenda } from "./Pages/Agenda/Agenda";
import { Servicios } from "./Pages/Servicios/Servicios";
import { PerdidosEncontrados } from "./Pages/Perdidos-Econtrados/PerdidosEncontrados";
import { QuieneSomos } from "./Pages/QuienesSomos/QuieneSomos";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/adoptar" element={<Adoptar />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/perdidos-Encontrados" element={<PerdidosEncontrados />} />
      <Route path="/quienesSomos" element={<QuieneSomos />} />
    </Routes>
  );
};
