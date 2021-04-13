import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// console.log( process.env );

// const firebaseConfig = {
//   apiKey: "AIzaSyDREysBfwkjWUWT0WEtxaToQE1cM7bEduA",
//   authDomain: "react-app-tutorial-a2d91.firebaseapp.com",
//   projectId: "react-app-tutorial-a2d91",
//   storageBucket: "react-app-tutorial-a2d91.appspot.com",
//   messagingSenderId: "298989973658",
//   appId: "1:298989973658:web:7d07d243b6c6e5c2192f23"
// };

// const firebaseConfigTesting = {
//   apiKey: "AIzaSyCATbTcTqsU_JPT594_yhM_Fj9hzJ3216I",
//   authDomain: "testing-1081a.firebaseapp.com",
//   projectId: "testing-1081a",
//   storageBucket: "testing-1081a.appspot.com",
//   messagingSenderId: "429933123405",
//   appId: "1:429933123405:web:3defe3b31e38f7790f4904"
// };


// if( process.env.NODE_ENV === "test" ) {
//   // testing
//   firebase.initializeApp(firebaseConfigTesting);
//   // console.log("testing");
// } else {
//   //dev/prod
//   firebase.initializeApp(firebaseConfig);
//   // console.log("dev");
// }

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGESENDERID,
  appId: process.env.REACT_APP_APPID
}

// console.log( process.env );


firebase.initializeApp(firebaseConfig);


// Initialize Firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}