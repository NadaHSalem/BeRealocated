// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = initializeApp({
  apiKey: "AIzaSyBjnt3ZXqbqCJBvteZ7z9A06Lic5cy2WMo",

  authDomain: "berealocated-dda07.firebaseapp.com",

  projectId: "berealocated-dda07",

  storageBucket: "berealocated-dda07.appspot.com",

  messagingSenderId: "219068664892",

  appId: "1:219068664892:web:c7c6a69c94b49496f34739",

  measurementId: "G-8YGHPE2HJ3"

});

const auth = getAuth(app);
export {auth};
// Initialize Firebase

const storage = getStorage(app);
export default storage;