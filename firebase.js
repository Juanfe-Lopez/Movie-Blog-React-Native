import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAWqV6IzXiRwcCVkWM5ExbdeYyG1U1JUGM",
    authDomain: "my-movies-4fcb8.firebaseapp.com",
    projectId: "my-movies-4fcb8",
    storageBucket: "my-movies-4fcb8.appspot.com",
    messagingSenderId: "199509361204",
    appId: "1:199509361204:web:7dd8b8de1b9313ae7f4061"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
