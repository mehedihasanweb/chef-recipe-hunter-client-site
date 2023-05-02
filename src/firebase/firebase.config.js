// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI4Dao08N2I2MjbKoQGIgAqn41XEcXWhY",
  authDomain: "chef-recepe-hunter.firebaseapp.com",
  projectId: "chef-recepe-hunter",
  storageBucket: "chef-recepe-hunter.appspot.com",
  messagingSenderId: "681342709636",
  appId: "1:681342709636:web:df5199c37d0d5ad3b4f7d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app