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
      const uid = user.uid;
    }
    return (
        <div className={styles.profile}>
            <center>
            <button className ={styles.top} onClick={signin}>Sign In with Google</button>
            </center>
            <button className ={styles.bottom} onClick={logout}>
                Logout
            </button>
            </div>
    )
};
export default Explore;