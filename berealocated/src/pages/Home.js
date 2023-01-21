import React from "react";
import Webcam from "react-webcam";
import styles from "./Home.module.css"
const videoConstraints = {
    width: 512,
    height: 512,
    facingMode: "user"
};
const imageSrc = null;
const Home = () => {
    return (
        <div className={styles.camera}>
            <Webcam
                audio={false}
                height={512}
                screenshotFormat="image/jpeg"
                width={512}
                videoConstraints={videoConstraints}
            >
                {({ getScreenshot }) => (
                    <button
                        onClick={() => {
                            const imageSrc = getScreenshot() }}>Capture</button>
                )}
            </Webcam>
            
        </div>
    )
};
export default Home;