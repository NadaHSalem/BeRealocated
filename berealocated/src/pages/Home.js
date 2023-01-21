import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import styles from "./Home.module.css"
function Home() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  return (
    <div className={styles.container}>
      {img === null ? (
        <>
          <Webcam
            className={styles.camera}
            audio={false}
            mirrored={true}
            height={500}
            width={500}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <div className={styles.outercircle}>
          <button className={styles.capture} onClick={capture}></button></div>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <button className={styles.retake} onClick={() => setImg(null)}>&#10006;</button>
        </>
      )}
    </div>
  );
}

export default Home;