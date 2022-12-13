import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD4YLGk1bmwKnuMU4KhxKgEBIVau1lNwiY",
  authDomain: "videoapp-47605.firebaseapp.com",
  projectId: "videoapp-47605",
  storageBucket: "videoapp-47605.appspot.com",
  messagingSenderId: "1057379016641",
  appId: "1:1057379016641:web:f9fe53056f32e36ce15940",
  measurementId: "G-5SBV4833KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;