// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-house.firebaseapp.com",
  projectId: "mern-house",
  storageBucket: "mern-house.appspot.com",
  messagingSenderId: "211226621793",
  appId: "1:211226621793:web:24f5d738bd50c1cfbe3720"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);