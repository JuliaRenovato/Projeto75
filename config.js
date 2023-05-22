import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = { apiKey: "AIzaSyCjXoLOxHK6TD6vPNz7WWu8R_UPbLhBF3o", authDomain: "bibliotecaeletronica-65e5b.firebaseapp.com", projectId: "bibliotecaeletronica-65e5b", storageBucket: "bibliotecaeletronica-65e5b.appspot.com", messagingSenderId: "665754538260", appId: "1:665754538260:web:03ac0ff720f346c7a93201" };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
