import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbplSFshUgrpk99vgf6JeW7chqmmcmPnE",
  authDomain: "enemulado-auth.firebaseapp.com",
  projectId: "enemulado-auth",
  storageBucket: "enemulado-auth.appspot.com",
  messagingSenderId: "542820710536",
  appId: "1:542820710536:web:337a15561482c0f28d873d"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
