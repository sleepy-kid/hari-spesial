import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg-NnfhVP3GkQn8HAqM8AfqmjVMTfEjuI",
  authDomain: "hari-spesial.firebaseapp.com",
  projectId: "hari-spesial",
  storageBucket: "hari-spesial.firebasestorage.app",
  messagingSenderId: "787189205056",
  appId: "1:787189205056:web:2cc7eebe19243f589bf7a5"
};

// Inisialisasi Firebase (mencegah error jika dipanggil berkali-kali oleh Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Inisialisasi database Firestore untuk RSVP & Buku Tamu
const db = getFirestore(app);

export { db };