import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDNJMNGl7dwYRHr0GLwX83oVIY-DsFFko4",
  authDomain: "enemulado-auth-2bf03.firebaseapp.com",
  projectId: "enemulado-auth-2bf03",
  storageBucket: "enemulado-auth-2bf03.appspot.com",
  messagingSenderId: "144030536993",
  appId: "1:144030536993:web:9a2390d2f53bc4e1489a60"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
