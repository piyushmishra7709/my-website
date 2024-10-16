// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS-FUWysZNTYXmY8lIBdIbag6g5IGfsrE",
  authDomain: "my-website7.firebaseapp.com",
  projectId: "my-website7",
  storageBucket: "my-website7.appspot.com",
  messagingSenderId: "218440531607",
  appId: "1:218440531607:web:0e0ee30b2a1981b1e1b3d2",
  measurementId: "G-D9X5Q2WG4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
