// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAEODrNnG_eU41TLYQbZG_fJCg07uWXnY",
  authDomain: "blogportafolio.firebaseapp.com",
  projectId: "blogportafolio",
  storageBucket: "blogportafolio.firebasestorage.app",
  messagingSenderId: "988807727814",
  appId: "1:988807727814:web:d0652694218c82803925c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Initialize Firestore
export const db = getFirestore(app);