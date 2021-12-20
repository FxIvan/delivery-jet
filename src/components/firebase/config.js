// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXRCOAYt3YkxWy7srvkK8o0exchjqdLw8",
  authDomain: "deliveryjet-2021.firebaseapp.com",
  projectId: "deliveryjet-2021",
  storageBucket: "deliveryjet-2021.appspot.com",
  messagingSenderId: "154897973830",
  appId: "1:154897973830:web:ef222576a3e0577e85c047"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)