import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyTask.css';
import SimpleMap from '../content/map';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../firebase_setup/firebase';
import Home from './Home';


function MyTask() {
  const [date, setDate] = useState(new Date())
  const navigate = useNavigate();
  const today = new Date();

  const navigateCamera = () => {
    let path = 'Home';
    navigate('/Home');
  };
  const user = getAuth().currentUser;
  if (user !== null) {
    var monthSelected = date.getMonth();
    var daySelected = date.getDate();
    /* also doesnt work
    try{
    var change = document.getElementById('taskcomplete');
    change.setAttribute('className', 'text-null');
    if (date.getDate() > today.getDate()) {
      change.setAttribute('className', 'text-center')
;    } else {
      change.setAttribute('className', 'text-null');
    }
    
    }catch(e)
    {
      console.log(e);
    }
    */
    getDownloadURL(ref(storage, `gs://berealocated-58df8.appspot.com/files/${user.email}/${monthSelected}${daySelected}.png`))
      .then((url) => {
        var img = document.getElementById('view');
        img.setAttribute('src', url);
        img.setAttribute('className', "image-style");
      })
      .catch((error) => {
        var img = document.getElementById('view');
        img.setAttribute('src', null);
        img.setAttribute('className', "null-style");
        // Handle any errors
        img = null;
      });

  }



  return (
    <div>

      <div className="body-text-center"> ⭐ Today is {today.toDateString()} ⭐</div>
      <div className="task-header">Upcoming Tasks</div>
      <div className="body-text">View completed and today's assigned location on a map.</div>
      <SimpleMap />
      <button className="button-camera" onClick={navigateCamera}>Take a picture</button>
      <div className="calendar-container">
        <div className="task-header">My Previous Tasks</div>
        <Calendar className="e.calendar" onChange={setDate} value={date} />
      </div>
      <div id="taskcomplete" className='text-center'>
        You completed the task on {date.toDateString()}! Here is your image:
        <img id="view" className='image-style' alt=" Nothing Here"></img>
      </div>
    </div>
  );
}
export default MyTask;