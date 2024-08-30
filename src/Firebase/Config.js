// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Asegúrate de importar la función para la base de datos

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBNhm2yE7yA5_ff2slM_daQTryX2efpwo",
  authDomain: "restaurant-328be.firebaseapp.com",
  projectId: "restaurant-328be",
  storageBucket: "restaurant-328be.appspot.com",
  messagingSenderId: "294627051787",
  appId: "1:294627051787:web:7037b82f159fe6c34a7a0e",
  measurementId: "G-F4LZYL81RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Inicializa la base de datos

export { database }; // Exporta la base de datos para usarla en tu aplicación
