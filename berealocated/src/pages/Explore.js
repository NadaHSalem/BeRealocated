import { useState, useEffect } from 'react';
import storage from "../firebase_setup/firebase";
import { ref, getDownloadURL } from 'firebase/storage';
import styles from "./Explore.css";
const Explore = () => {

    

    // Get all the images from Storage
    const [files, setFiles] = useState();

getDownloadURL(ref(storage, 'gs://berealocated-58df8.appspot.com/files/lucas.reljic@gmail.com/lucas.reljic@gmail.com021.png'))
  .then((url) => {
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
return (
    <div>
        <img src={files} id="myimg" alt="missing" />
    </div>
);
}
export default Explore;