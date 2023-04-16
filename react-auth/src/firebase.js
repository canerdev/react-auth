// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAPQJ4kseGEk2RmTrDlqW_DZ-RRUbMWP8",
  authDomain: "uretken-akademi-fc9d7.firebaseapp.com",
  projectId: "uretken-akademi-fc9d7",
  storageBucket: "uretken-akademi-fc9d7.appspot.com",
  messagingSenderId: "368166387168",
  appId: "1:368166387168:web:61aa3c2e749144e805ff85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
