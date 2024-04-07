import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiil0qJ3bFuF8sVQTXIvc8gKgOe9JqWaE",
  authDomain: "urbandwellings-auth.firebaseapp.com",
  projectId: "urbandwellings-auth",
  storageBucket: "urbandwellings-auth.appspot.com",
  messagingSenderId: "73317492144",
  appId: "1:73317492144:web:4eb526a744dc4b832d2275"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;