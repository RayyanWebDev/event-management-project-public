// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcUpDUCZxxoLJQnvOJ0t5w_XVPLcAXto0",
  authDomain: "cinehub-firebase.firebaseapp.com",
  projectId: "cinehub-firebase",
  storageBucket: "cinehub-firebase.appspot.com",
  messagingSenderId: "19372923371",
  appId: "1:19372923371:web:d3873f39bd2782a29621ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// const auth = getAuth(app);
// export default auth;
