// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';
const firebaseToken = import.meta.env.VITE_FIREBASE_TOKEN;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: firebaseToken,
  authDomain: "balanlaedenuges-ljngeg.firebaseapp.com",
  projectId: "balanlaedenuges-ljngeg",
  storageBucket: "balanlaedenuges-ljngeg.appspot.com",
  messagingSenderId: "354722806747",
  appId: "1:354722806747:web:11a398b66fa2cc479045fe",
  measurementId: "G-Y3XQ1H936J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);
const auth = getAuth();

// init firebase
export { app, db, storage, auth };