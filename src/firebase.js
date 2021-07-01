import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAA3YyYFOpApQcgOSY8QJTixO2zQ9ZSbxQ",
    authDomain: "crud-xpath-supports.firebaseapp.com",
    projectId: "crud-xpath-supports",
    storageBucket: "crud-xpath-supports.appspot.com",
    messagingSenderId: "65614225135",
    appId: "1:65614225135:web:9f1195c48c0435a359051a"
  };
  // Initialize Firebase
const fb =  firebase.initializeApp(firebaseConfig);

//se utilizara para guardar colecciones, eliminar datos, modificar db
export const db = fb.firestore();

