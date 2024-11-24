// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGzdqsAUOfAvZTyFh6MVLFz5X2mcOrABs",
  authDomain: "journalapp-422f8.firebaseapp.com",
  projectId: "journalapp-422f8",
  storageBucket: "journalapp-422f8.firebasestorage.app",
  messagingSenderId: "32788836775",
  appId: "1:32788836775:web:ff10622f24e4a00933c682"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);