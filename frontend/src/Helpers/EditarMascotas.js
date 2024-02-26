import mascotas from "../json/mascotas.json";

export default function editarMascotas(idMascotas) {
    // console.log("idM", idMascotas)
    return mascotas.find(mascota => mascota.id === idMascotas);
    // console.log("encontrada", mascotaEncontrada)

    //  mascotaEncontrada
    // if (mascotaEncontrada) {
    //     // console.log('Mascota encontrada:', mascotaEncontrada.json());
    //     return mascotaEncontrada.json();
    // } else {
    //     // console.log('Mascota no encontrada');
    //     return null; // O puedes devolver un valor que indique que no se encontró la mascota
    // }
}


