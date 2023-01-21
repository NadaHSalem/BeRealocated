import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Nav from './content/Nav';
import reportWebVitals from './reportWebVitals';
import handleSubmit from './handles/handle_submit';
import MyTask from './pages/MyTask';
import { useRef } from 'react';


function App() {
    const dataRef = useRef()

    const submithandler = (e) => {
        e.preventDefault()
        handleSubmit(dataRef.current.value)
        dataRef.current.value = ""
    }

    return (
        <div className="App">
             
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<Home />} />
                        <Route path="Explore" element={<Explore />} />
                        <Route path="MyTask" element={<MyTask />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <input type="file" accept="image/*" onChange={handleChange}/>
            <button>Upload to Firebase</button>
        </div>
    );
}

export default App;