import { Tabs } from 'flowbite-react';
import {  HiUserCircle, HiCalendar, HiFolderOpen  } from 'react-icons/hi';
import { FaDog } from "react-icons/fa";
import { Turnos } from '../../Components/Turnos/Turnos';
import {HistorialMedico} from '../../Components/HistorialMedico/HistorialMedico'


export const Perfil = () => {
    return (
        <div>
            <Tabs aria-label="Tabs with icons" style="underline">
                <Tabs.Item active title="Datos de usuario" icon={HiUserCircle}>
                   
                </Tabs.Item>

                <Tabs.Item title="Mis mascotas" icon={FaDog}>
                 
                </Tabs.Item>

                <Tabs.Item title="Historial médico" icon={HiFolderOpen }>
                   <HistorialMedico></HistorialMedico>
                </Tabs.Item>

                <Tabs.Item title="Turnos" icon={HiCalendar}>
                   <Turnos></Turnos>
                </Tabs.Item>

                {/* <Tabs.Item disabled title="Disabled">
                 
                </Tabs.Item> */}
            </Tabs>
        </div>
    )
}
