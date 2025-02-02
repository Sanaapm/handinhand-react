// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjb4ymh0FGgpoO9dHkvHnrIztIVR-OkS8",
  authDomain: "hand-in-hand-2024.firebaseapp.com",
  projectId: "hand-in-hand-2024",
  storageBucket: "hand-in-hand-2024.appspot.com",  // Corrected from 'firebasestorage.app'
  messagingSenderId: "461457328007",
  appId: "1:461457328007:web:64dde04b9aba3e56113522",
  measurementId: "G-GN59284WMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);          // Initialize Firebase Authentication
const db = getFirestore(app);       // Initialize Firestore (for database if needed)
const analytics = getAnalytics(app);

// Export the auth and db instances
export { auth, db, analytics };
