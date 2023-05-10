// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmE1UdmY14AA7PGAGuFVn9ZvZacuLlbII",
  authDomain: "capivarias-769e2.firebaseapp.com",
  projectId: "capivarias-769e2",
  storageBucket: "capivarias-769e2.appspot.com",
  messagingSenderId: "355252771276",
  appId: "1:355252771276:web:b4c5c13de56595c8972569"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);