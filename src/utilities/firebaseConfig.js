// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj2JeinaAcRNjEZ_x5UYWPdap1tOLe93M",
  authDomain: "txmxdoodles-diaz.firebaseapp.com",
  projectId: "txmxdoodles-diaz",
  storageBucket: "txmxdoodles-diaz.appspot.com",
  messagingSenderId: "711945004630",
  appId: "1:711945004630:web:a97f7f53a8031dc33cfdf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);