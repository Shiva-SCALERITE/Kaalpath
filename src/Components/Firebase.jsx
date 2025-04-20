import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const Firebase = {
    apiKey: "AIzaSyAsWKGzbdBm8LE2xkJbueNEeyhSQfhW5Tw",
    authDomain: "kaalpath-18abd.firebaseapp.com",
    projectId: "kaalpath-18abd",
    storageBucket: "kaalpath-18abd.firebasestorage.app",
    messagingSenderId: "97889228400",
    appId: "1:97889228400:web:9ace4d6dc2b3c0dba5c6b5",
    measurementId: "G-PXM98L6YLH"
};

const app = initializeApp(Firebase);
export const auth = getAuth(app);
