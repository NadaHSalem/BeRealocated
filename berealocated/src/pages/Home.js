import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import styles from "./Home.module.css";
import storage from "../firebase_setup/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Home() {
  // State to store uploaded file
  const [file, setFile] = useState("");

  // progress
  const [percent, setPercent] = useState(0);

  // Converts img to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  // upload to firebase 
  const handleUpload = () => {
    img.src = img;
    img.onload = () => {
      // create Canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // create a tag
      const a = document.createElement('a');
      a.download = 'download.png';
      a.href = canvas.toDataURL('image/png');
      a.click();
    }
    file.append('file', img);
    file.append('Content-Type', 'image/png');
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };


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

          <button className={styles.send} onClick={handleUpload}><i class="material-icons">send</i></button>
          <p>{percent} "% done"</p>
        </>
      )}
    </div>
  );
}

export default Home;