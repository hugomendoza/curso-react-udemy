// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log( import.meta.env );
// console.log(process.env)

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

const firebaseConfig = {
  apiKey: VITE_APIKEY, 
  authDomain: VITE_AUTHDOMAIN, 
  projectId: VITE_PROJECTID, 
  storageBucket: VITE_STORAGEBUCKET, 
  messagingSenderId: VITE_MESSAGINGSENDERID, 
  appId: VITE_APPID
};

console.log(firebaseConfig);

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyCxCi8MuWmHWTUcKcGeA97RAVB2cyO1Kuw",
//   authDomain: "react-udemy-fb9e0.firebaseapp.com",
//   projectId: "react-udemy-fb9e0",
//   storageBucket: "react-udemy-fb9e0.appspot.com",
//   messagingSenderId: "1045865336872",
//   appId: "1:1045865336872:web:f7f351571bcc54f5b6a51d"
// };

//Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyBPafT1pPtL8YnQx0TiXHcRfhpaEFdkdBc",
//   authDomain: "test-react-curse.firebaseapp.com",
//   projectId: "test-react-curse",
//   storageBucket: "test-react-curse.appspot.com",
//   messagingSenderId: "183047735921",
//   appId: "1:183047735921:web:a9f5ec9cf5f44c1bae69d0"
// };

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDb = getFirestore( FirebaseApp );
