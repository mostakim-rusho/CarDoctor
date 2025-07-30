// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8TxI01Yzohq2QY-SKKoyBdZAwOV36V7M",
  authDomain: "cars-doctor-33cc9.firebaseapp.com",
  projectId: "cars-doctor-33cc9",
  storageBucket: "cars-doctor-33cc9.firebasestorage.app",
  messagingSenderId: "744260675577",
  appId: "1:744260675577:web:6fd35785810a6269507f28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;