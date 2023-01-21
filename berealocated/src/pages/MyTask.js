import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import './MyTask.css';

function MyTask() {
    const [date, setDate] = useState(new Date())
   return (
    <div>
    <h1 className="header">React Calendar</h1>
    <div className="calendar-container">
      <Calendar className = "e.calendar" onChange={setDate} value={date}/>
    </div>
    <div className="text-center">
       Selected date: {date.toDateString()}
    </div>
    </div>
     )
   }
   export default MyTask;