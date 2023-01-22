import React from "react";
import styles from "./Profile.module.css";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
const Explore = () => {
    const signin = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;}).catch(alert);
    }
    const logout = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
          });
    }
    const user = auth.currentUser;
    if (user !== null) {
      var displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      if(displayName !== null){
        document.getElementById("display").innerHTML = displayName.toString();
      }
      const uid = user.uid;
    }
    return (
        <div className={styles.profile}>
            <center>
            <button style={{"marginTop" : "200px"}} 
                onClick={signin}>Sign In with Google</button>
            </center>
            <button style={{"marginLeft" : "20px"}} 
            onClick={logout}>
                Logout
            </button>
            <h1 id="display">_</h1>
            </div>
    )
};
export default Explore;