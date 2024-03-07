/* eslint-disable react/prop-types */
import { Tabs } from "flowbite-react";
import { HiUserCircle, HiCalendar, HiFolderOpen } from "react-icons/hi";
import { FaDog } from "react-icons/fa";
import { Turnos } from "../../Components/Turnos/Turnos";
import { HistorialMedico } from "../../Components/HistorialMedico/HistorialMedico";
import { CargarMascota } from "../../Components/MisMascotas/CargarMascota";
import { MisMascotas } from "../../Components/MisMascotas/MisMascotas";
import DatosUsuario from "../../Components/DatosUsuario/DatosUsuario";
import { useRef, useEffect, useState } from "react";

export const Perfil = () => {

  const tabsRef = useRef(null);

  const storedActiveTab = localStorage.getItem('activeTab');
  const [activeTab, setActiveTab] = useState(storedActiveTab ? parseInt(storedActiveTab, 10) : 0);

  const handleTabChange = (index) => {
    setActiveTab(index);
    localStorage.setItem('activeTab', index.toString());
  };

  useEffect(() => { 
    const storedActiveTab = localStorage.getItem('activeTab');
    console.log("hola");
    if (storedActiveTab) {
      setActiveTab(parseInt(storedActiveTab, 10));
      tabsRef.current?.setActiveTab(activeTab)
    }
  }, []);

  
  return (
    <div>
      <Tabs aria-label="Tabs with icons" style="underline" ref={tabsRef}  onActiveTabChange={handleTabChange}>
        <Tabs.Item active title="Datos de usuario" icon={HiUserCircle}>
          <DatosUsuario />
        </Tabs.Item>
        <Tabs.Item title="Mis mascotas" icon={FaDog}>
          <MisMascotas />
          <CargarMascota />
        </Tabs.Item>
        <Tabs.Item title="Historial médico" icon={HiFolderOpen}>
          <HistorialMedico />
        </Tabs.Item>        
        <Tabs.Item title="Turnos" icon={HiCalendar}>
          <Turnos />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};
