// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDZH_-8EiEtXuzRL0FlFfk2ueSgXzf6FsI",
  authDomain: "berealocated-4370a.firebaseapp.com",
  projectId: "berealocated-4370a",
  storageBucket: "berealocated-4370a.appspot.com",
  messagingSenderId: "567628595005",
  appId: "1:567628595005:web:c271ac0a3b97680d2f0f54",
  measurementId: "G-57VPKRXTYP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app)