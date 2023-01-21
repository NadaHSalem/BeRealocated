import React from "react";
import styles from "./Profile.module.css";
import { signInWithGoogle } from "../firebase_setup/firebase";

const Explore = () => {

    return (
        <div className={styles.profile}>
            
            <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
            </div>
    )
};
export default Explore;