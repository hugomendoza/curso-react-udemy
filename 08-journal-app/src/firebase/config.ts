// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxCi8MuWmHWTUcKcGeA97RAVB2cyO1Kuw",
  authDomain: "react-udemy-fb9e0.firebaseapp.com",
  projectId: "react-udemy-fb9e0",
  storageBucket: "react-udemy-fb9e0.appspot.com",
  messagingSenderId: "1045865336872",
  appId: "1:1045865336872:web:f7f351571bcc54f5b6a51d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDb = getFirestore( FirebaseApp );
