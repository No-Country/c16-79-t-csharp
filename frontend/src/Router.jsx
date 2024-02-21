import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Perfil } from "./Pages/Perfil/Perfil";

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/perfil" element={<Perfil/>} />
    </Routes>
  );
};
