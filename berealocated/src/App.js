import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Nav from './content/Nav';
import Profile from './pages/Profile'
import reportWebVitals from './reportWebVitals';
import MyTask from './pages/MyTask';
import { useState } from "react";
import storage from "./firebase_setup/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function App() {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
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
                        <Route path ="profile" element={<Profile />}/>
                        <Route path="Explore" element={<Explore />} />
                        <Route path="MyTask" element={<MyTask />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;