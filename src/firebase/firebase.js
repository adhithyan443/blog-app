// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHqxRQ8U1ajvdcZlVpr_wRHk-KC62owvQ",
    authDomain: "my-blog-app-82868.firebaseapp.com",
    projectId: "my-blog-app-82868",
    storageBucket: "my-blog-app-82868.firebasestorage.app",
    messagingSenderId: "379169170992",
    appId: "1:379169170992:web:9342d8d10871a4ee216ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;