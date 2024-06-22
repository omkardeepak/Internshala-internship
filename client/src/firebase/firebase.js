// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAul50xR87Z_tEqX2JLicIUqiJIpiq4-jw",
  authDomain: "internshalatest-54add.firebaseapp.com",
  projectId: "internshalatest-54add",
  storageBucket: "internshalatest-54add.appspot.com",
  messagingSenderId: "822367942954",
  appId: "1:822367942954:web:bed832aeab04db82660653",
  measurementId: "G-PCFZ8XV2G9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
auth.languageCode='en'
const provider=new GoogleAuthProvider();
export {auth,provider}