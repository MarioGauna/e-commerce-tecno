// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCb0g12-ST8EYxOQs2bRD16v5kSf71hvd0",
    authDomain: "e-commerce-react-js-52fb7.firebaseapp.com",
    projectId: "e-commerce-react-js-52fb7",
    storageBucket: "e-commerce-react-js-52fb7.appspot.com",
    messagingSenderId: "511107088034",
    appId: "1:511107088034:web:7f9f7ea218ef831c56a1fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;