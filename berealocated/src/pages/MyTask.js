import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyTask.css';
import SimpleMap from '../content/map';


function MyTask() {
  const [date, setDate] = useState(new Date())
  return (
    <div>
      <h1 className="header">Map</h1>
      <SimpleMap isMarkerShown/>
      <h1 className="header">Take Photo</h1>
      <div className="calendar-container">
        <h1 className="header">Calendar</h1>
        <Calendar className="e.calendar" onChange={setDate} value={date} />
      </div>
      <div className="text-center">
        Selected date: {date.toDateString()}
      </div>
    </div>
  )
}
export default MyTask;