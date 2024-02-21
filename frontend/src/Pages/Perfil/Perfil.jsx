import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

const Perfil = () => {
    return (
        <div>
            <Tabs aria-label="Tabs with icons" style="underline">
                <Tabs.Item active title="Datos de usuario" icon={HiUserCircle}>
                   
                </Tabs.Item>

                <Tabs.Item title="Mi mascotas" icon={MdDashboard}>
                 
                </Tabs.Item>

                <Tabs.Item title="Historial médico" icon={HiAdjustments}>
                   
                </Tabs.Item>

                <Tabs.Item title="Turnos" icon={HiClipboardList}>
                   
                </Tabs.Item>

                {/* <Tabs.Item disabled title="Disabled">
                 
                </Tabs.Item> */}
            </Tabs>
        </div>
    )
}

export default Perfil