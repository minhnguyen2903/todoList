// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZIaLQQsliOodec5akezqxA82vIIOo9z4",
  authDomain: "miztodo.firebaseapp.com",
  projectId: "miztodo",
  storageBucket: "miztodo.appspot.com",
  messagingSenderId: "778364354525",
  appId: "1:778364354525:web:d82d1c4919411a23010034",
  measurementId: "G-QR9CC1D4MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);