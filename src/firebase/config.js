// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBdWBKx4ghWAtco6uyUmelpRUyLBjRVEM",
  authDomain: "mymoney-24146.firebaseapp.com",
  projectId: "mymoney-24146",
  storageBucket: "mymoney-24146.firebasestorage.app",
  messagingSenderId: "38073344441",
  appId: "1:38073344441:web:cb33db21c8dbc28f859668",
  measurementId: "G-XWN3N39073",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
