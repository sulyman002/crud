// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW31a2fBq7hJc8ODXaN5RrYo8OGO3cHYo",
  authDomain: "tbs-crud.firebaseapp.com",
  projectId: "tbs-crud",
  storageBucket: "tbs-crud.firebasestorage.app",
  messagingSenderId: "189743210610",
  appId: "1:189743210610:web:2c7805300486663657a2eb",
  measurementId: "G-GXLVS8CGM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, app, db };