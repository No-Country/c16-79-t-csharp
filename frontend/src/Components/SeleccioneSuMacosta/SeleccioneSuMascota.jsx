'use client';

import { Dropdown } from 'flowbite-react';

export const SeleccioneSuMascota = () => {
    return (
        <div>
            <Dropdown label="Seleccione su mascota" dismissOnClick={false}>
                <Dropdown.Item>Mascota 1</Dropdown.Item>
                <Dropdown.Item>Mascota 2</Dropdown.Item>
            </Dropdown>
        </div>
    )
}
