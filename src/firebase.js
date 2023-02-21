import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7sW9R7zBGes2poLAA6qP_DuiyXHfWUDA",
  authDomain: "react-trimurti.firebaseapp.com",
  databaseURL: "https://react-trimurti-default-rtdb.firebaseio.com",
  projectId: "react-trimurti",
  storageBucket: "react-trimurti.appspot.com",
  messagingSenderId: "835939200765",
  appId: "1:835939200765:web:fe15acbd463ddf2c289894",
  measurementId: "G-PMXZ86HD0C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app)