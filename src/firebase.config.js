import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjc9xTIP0D9-v5p172O9KCnb4uSgHFcA8",
  authDomain: "estate-square.firebaseapp.com",
  projectId: "estate-square",
  storageBucket: "estate-square.appspot.com",
  messagingSenderId: "543267865417",
  appId: "1:543267865417:web:71ab519439cffd120b9098",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
