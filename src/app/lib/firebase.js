import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Kita tidak import getStorage karena foto akan dititipkan di layanan lain

const firebaseConfig = {
  apiKey: "AIzaSyBg-NnfhVP3GkQn8HAqM8AfqmjVMTfEjuI",
  authDomain: "hari-spesial.firebaseapp.com",
  projectId: "hari-spesial",
  storageBucket: "hari-spesial.firebasestorage.app",
  messagingSenderId: "787189205056",
  appId: "1:787189205056:web:2cc7eebe19243f589bf7a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
