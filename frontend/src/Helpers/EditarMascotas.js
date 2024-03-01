import mascotas from "../json/mascotas.json";

function editarMascotas(idMascotas) {

    return mascotas.find(mascota => mascota.id === idMascotas);

}
export default editarMascotas;

export const pruebaF = async() => {
    try {
        const response = await fetch("http://localhost:4600/api/categories")
        const data = await response.json()
        console.log("data: ",data)
    } catch (error) {
        console.log("Error.")
    }
} 


