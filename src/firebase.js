import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDNQerf3NG573Tp6BiVKLf4WX__Fasei8Y",
  authDomain: "clone-12287.firebaseapp.com",
  databaseURL: "https://clone-12287.firebaseio.com",
  projectId: "clone-12287",
  storageBucket: "clone-12287.appspot.com",
  messagingSenderId: "86001000853",
  appId: "1:86001000853:web:6d6d2d77c537a213b0169c",
  measurementId: "G-F4NXQV49ED"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
