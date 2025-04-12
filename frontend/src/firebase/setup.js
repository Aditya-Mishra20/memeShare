// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3M623Q70CnYTMav8GuVE4CZ73YycO0sQ",
  authDomain: "memeshare-6347a.firebaseapp.com",
  projectId: "memeshare-6347a",
  storageBucket: "memeshare-6347a.firebasestorage.app",
  messagingSenderId: "345298349409",
  appId: "1:345298349409:web:d155e29134ff47c001e920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Set up Google provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// Function to handle sign-in with Google
const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, signInWithGoogle, db};