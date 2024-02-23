import mascotas from "../json/mascotas.json";

function editarMascotas(idMascotas) {
    console.log("id", idMascotas)
    const mascotaEncontrada = mascotas.find(mascota => mascota.id === idMascotas);

    if (mascotaEncontrada) {
        console.log('Mascota encontrada:', mascotaEncontrada.json());
        return mascotaEncontrada.json();
    } else {
        console.log('Mascota no encontrada');
        return null; // O puedes devolver un valor que indique que no se encontró la mascota
    }
}

export default editarMascotas;
