// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk-WRugQgjXVavbx9J3kotT-XSkpqEQdw",
  authDomain: "kumon-nahledge.firebaseapp.com",
  projectId: "kumon-nahledge",
  storageBucket: "kumon-nahledge.firebasestorage.app",
  messagingSenderId: "572996077108",
  appId: "1:572996077108:web:10ba4846e61148a944ac61",
  measurementId: "G-Q90C33XXVB"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

