// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCE1smh1E-etIO8-cBKFhWmlz_nu5hRqe4",
  authDomain: "tinderclone-d4375.firebaseapp.com",
  projectId: "tinderclone-d4375",
  storageBucket: "tinderclone-d4375.appspot.com",
  messagingSenderId: "687203833016",
  appId: "1:687203833016:web:c0362e14670b7fde1e504d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {app,auth}