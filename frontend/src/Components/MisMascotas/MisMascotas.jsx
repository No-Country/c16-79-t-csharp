import { Card } from 'flowbite-react';
import MascotasJson from "../../json/mascotas.json";
import { ListGroup } from 'flowbite-react';
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';
import { BsCalendar2DateFill } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';


export const MisMascotas = () => {
    return (
        <div className='container mx-auto py-10 px-8 max-w-6xl flex'>
            {MascotasJson.map((d) => {
                return (
                    <Card
                     key={d.id}
                    className="max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={d.foto}
                  >
                    
                    <div className="flex justify-center">
      <ListGroup className="w-48">
        <ListGroup.Item icon={HiUserCircle} active>
          {d.nombre}
        </ListGroup.Item>
        <ListGroup.Item icon={BsCalendar2DateFill}>{d.edad}</ListGroup.Item>
        <ListGroup.Item icon={GiWeight}>{d.peso}</ListGroup.Item>
        <ListGroup.Item icon={MdOutlinePets}>{d.raza}</ListGroup.Item>
         <button><ListGroup.Item icon={FaRegEdit}>Editar</ListGroup.Item></button>
      </ListGroup>
    </div>
                  {/*   <p className="font-normal text-gray-700 dark:text-gray-400">
                      
                    </p> */}
                  </Card>  
                )
            })}

        </div>
    )
}
