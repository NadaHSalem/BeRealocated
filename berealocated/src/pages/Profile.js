import React from "react";
import styles from "./Profile.module.css";
import {auth , provider}  from '../firebase_setup/firebase';

const Explore = () => {
    const signin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
    const logout = () => {
        auth.signOut();
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
            </div>
    )
};
export default Explore;