import mascotas from "../json/mascotas.json";

function editarMascotas(idMascotas) {

    return mascotas.find(mascota => mascota.id === idMascotas);

}
export default editarMascotas;
