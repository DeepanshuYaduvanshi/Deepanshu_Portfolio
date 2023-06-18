
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaGQQ6iwhWF4tUAcLZtr4Y6uqTGEt2AZg",
  authDomain: "deepanshu-yaduvanshi-portfolio.firebaseapp.com",
  projectId: "deepanshu-yaduvanshi-portfolio",
  storageBucket: "deepanshu-yaduvanshi-portfolio.appspot.com",
  messagingSenderId: "993279885571",
  appId: "1:993279885571:web:eb6164d7a7b3cad7af2936"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
