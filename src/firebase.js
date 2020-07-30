import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBy9wfrev1goG7l3Thc8tTpC2N1bRFkgEM",
  authDomain: "messengerdemo-89f15.firebaseapp.com",
  databaseURL: "https://messengerdemo-89f15.firebaseio.com",
  projectId: "messengerdemo-89f15",
  storageBucket: "messengerdemo-89f15.appspot.com",
  messagingSenderId: "483036690358",
  appId: "1:483036690358:web:192e493edcb7e4e4db3317",
  measurementId: "G-7R6R651SNG",
});

const db = firebase.firestore();

export default db;
