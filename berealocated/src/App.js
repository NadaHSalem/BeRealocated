import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Nav from './content/Nav';
import reportWebVitals from './reportWebVitals';
import MyTask from './pages/MyTask';
import { useState } from "react";
import storage from "./firebase_setup/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function App() {
    // State to store uploaded file
    const [file, setFile] = useState("");

    // progress
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
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

    return (
        
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<Home />} />
                        <Route path="Explore" element={<Explore />} />
                        <Route path="MyTask" element={<MyTask />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <input type="file" onChange={handleChange} accept="/image/*" />
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent} "% done"</p>
        </div>
    );
}

export default App;

{/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<Home />} />
                        <Route path="Explore" element={<Explore />} />
                        <Route path="MyTask" element={<MyTask />} />
                    </Route>
                </Routes>
            </BrowserRouter> */}