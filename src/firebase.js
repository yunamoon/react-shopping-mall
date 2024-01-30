// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVC6Kyv5fpTzk8imU8VcJx6twBbuAFteI",
  authDomain: "react-study2023.firebaseapp.com",
  projectId: "react-study2023",
  storageBucket: "react-study2023.appspot.com",
  messagingSenderId: "199609043125",
  appId: "1:199609043125:web:6e92e41a1042bf6a8516fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;