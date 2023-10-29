// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBngxvWZe0JaCATn1C7XtlNA4cjhrAWfAY",
  authDomain: "react-auth-eae43.firebaseapp.com",
  projectId: "react-auth-eae43",
  storageBucket: "react-auth-eae43.appspot.com",
  messagingSenderId: "315749851715",
  appId: "1:315749851715:web:cff1e838c1caa062136af6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);