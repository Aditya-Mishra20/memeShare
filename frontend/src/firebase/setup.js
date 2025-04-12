// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.APIKEY,
  authDomain: import.meta.env.AUTHDOMAIN,
  projectId: import.meta.env.PROJECTID,
  storageBucket: import.meta.env.STORAGEBUCKET,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID,
  appId: import.meta.env.APPID
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