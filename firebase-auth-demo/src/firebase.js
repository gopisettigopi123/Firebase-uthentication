// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC0rAwo2nya8wZUrOQaauOp8M-iXYYSwcE",
//   authDomain: "fir-auth-demo-e2219.firebaseapp.com",
//   projectId: "fir-auth-demo-e2219",
//   storageBucket: "fir-auth-demo-e2219.appspot.com",
//   messagingSenderId: "702482725438",
//   appId: "1:702482725438:web:0b98205c2bcd1df6b66f6f",
//   measurementId: "G-RHF8VD99YV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace this with your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC0rAwo2nya8wZUrOQaauOp8M-iXYYSwcE",
  authDomain: "fir-auth-demo-e2219.firebaseapp.com",
  projectId: "fir-auth-demo-e2219",
  storageBucket: "fir-auth-demo-e2219.appspot.com",
  messagingSenderId: "702482725438",
  appId: "1:702482725438:web:0b98205c2bcd1df6b66f6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
