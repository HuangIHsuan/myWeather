// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 匯入firebase
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBZNqDDj_4eddm-iaCX34wOW548D5nduI",
    authDomain: "reactband-2c799.firebaseapp.com",
    projectId: "reactband-2c799",
    storageBucket: "reactband-2c799.firebasestorage.app",
    messagingSenderId: "1023941518690",
    appId: "1:1023941518690:web:8de666d4684d7e0958b83b",
    measurementId: "G-EBXRQ6ZXFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 匯出
export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();