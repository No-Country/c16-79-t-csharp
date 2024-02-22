import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"

const firebaseConfig = {
    apiKey: "AIzaSyCqH32wZwFJZpCS0lELQEXz7A7NNUlFhAg",
    authDomain: "subida-de-imagenes.firebaseapp.com",
    projectId: "subida-de-imagenes",
    storageBucket: "subida-de-imagenes.appspot.com",
    messagingSenderId: "234660522718",
    appId: "1:234660522718:web:3ad0002453bef07bc6704f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file) {
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}
