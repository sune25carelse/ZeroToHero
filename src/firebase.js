import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyByd0Y-R0i7aEXpuZekFKYv9JDYmLbwysc",
  authDomain: "todo-app-zth.firebaseapp.com",
  projectId: "todo-app-zth",
  storageBucket: "todo-app-zth.appspot.com",
  messagingSenderId: "679160192451",
  appId: "1:679160192451:web:a4e729c3e8429f60e2b176",
  measurementId: "G-Y4ZB219BPY",
});

const db = firebaseApp.firestore();

export default db;
