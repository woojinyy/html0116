// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDEIy9NwR-tkmaC0REb_yWytU9IDrzP9E",
  authDomain: "kh-221128-d6d5c.firebaseapp.com",
  projectId: "kh-221128-d6d5c",
  storageBucket: "kh-221128-d6d5c.appspot.com",
  messagingSenderId: "690942985220",
  appId: "1:690942985220:web:17c1a29204fe1cee8c2151",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);
