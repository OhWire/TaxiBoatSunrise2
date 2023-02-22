import React, { useState, useEffect } from 'react';
import './Booking.css'


function Booking() {
  const [route, setRoute] = useState('');
  const [date, setDate] = useState('');
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [seats, setSeats] = useState(["1","2","3","4","5","6"])

  useEffect(() => {
    // Here's where you would retrieve the available times for the selected route and date
    // In this example, we'll just generate some dummy times
    const availableTimes = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    // Here's where we'll count how many bookings there are for each tour time
    const bookings = {};
    

    // Here's where we'll filter out times that are already fully booked
    const filteredTimes = availableTimes.filter(time => {
      if (!bookings[time]) {
        bookings[time] = 1;
        return true;
      } else if (bookings[time] < 6) {
        bookings[time]++;
        return true;
      } else {
        return false;
      }
    });

    setTimes(filteredTimes);
  }, [route, date]);



  const handleSubmit = event => {
    event.preventDefault();
    // Here's where you would submit the booking data to your backend
    return(
      <>
      </>
    )
  };

  return (
    <div className='Booking-container'>
   
    <h1 className='booking-header'>BOOK A ROUTE</h1>
    <div className="divider"></div>
    <form onSubmit={handleSubmit} className='booking-container background-blur-white '>
    <div className=""></div>
      <select className='input' id="route" value={route} onChange={event => setRoute(event.target.value)}>
        <option className='placeholder' value="">SELECT A ROUTE</option>
        <option value="Route 1">Caminha to "OPTION-1" Single</option>
        <option value="Route 2">Caminha to "OPTION-1" Return</option>
        <option value="Route 3">Caminha to "OPTION-2" Single</option>
        <option value="Route 3">Caminha to "OPTION-2" Return</option>
      </select>
      <input className='input' type="date" id="date" value={date} onChange={event => setDate(event.target.value)} />
      <select className='input'  id="time" value={selectedTime} onChange={event => setSelectedTime(event.target.value)}>
        <option className='placeholder'  value="">SELECT   A   TIME </option>
        {times.map(time => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      <select className='input' type="input" id="seats" value={seats} onChange={event => setSeats(event.target.value)}>
        <option className='placeholder' value="">NUMBER OF PERSONS</option>
        {seats.map(seats => (
          <option key={seats} value={seats}>{seats}</option>
        ))}
      </select>
      <button className='button'>SUBMIT</button>
    </form>
    </div>
  );
}

export default Booking;
