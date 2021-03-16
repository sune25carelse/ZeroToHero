import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByd0Y-R0i7aEXpuZekFKYv9JDYmLbwysc",
  authDomain: "todo-app-zth.firebaseapp.com",
  projectId: "todo-app-zth",
  storageBucket: "todo-app-zth.appspot.com",
  messagingSenderId: "679160192451",
  appId: "1:679160192451:web:e5a1937f81ca4c10e2b176",
  measurementId: "G-GD43C2SSCY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
