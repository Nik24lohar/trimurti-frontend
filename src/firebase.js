import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyTI2P0rSPLAsYl0eHwClNahfSxrYxaBw",
  authDomain: "trimurti-9a996.firebaseapp.com",
  projectId: "trimurti-9a996",
  storageBucket: "trimurti-9a996.appspot.com",
  messagingSenderId: "401405712462",
  appId: "1:401405712462:web:6c90d3b6d3d349ba6fcb1f",
  measurementId: "G-LYY6B2HN9D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app)