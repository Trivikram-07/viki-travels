import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bookingbox.css';

const Bookingbox = () => {
  const navigate = useNavigate();
  const [pickUpDate, setPickUpDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
  }, []);

  const handlePickUpDateChange = (event) => {
    const newPickUpDate = event.target.value;
    setPickUpDate(newPickUpDate);
    if (returnDate && newPickUpDate > returnDate) {
      setReturnDate('');
    }
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleRentClick = () => {
    navigate('/cars');
  };

  return (
    <div className="booking-container">
      <div className="booking-image"></div>
      <div className="booking-content">
        <div className="input-row">
          <input
            type="text"
            placeholder="Pick-up Location"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Dropping City"
            className="input-field"
          />
        </div>
        <div className="input-row">
          <input
            type="date"
            className="input-field"
            placeholder="Pick-up Date"
            min={currentDate}
            value={pickUpDate}
            onChange={handlePickUpDateChange}
          />
          <input
            type="date"
            className="input-field"
            placeholder="Return Date"
            min={pickUpDate || currentDate}
            value={returnDate}
            onChange={handleReturnDateChange}
          />
        </div>
        <div className="input-row">
          <select className="input-field">
            <option value="" disabled selected>
              Type of Car
            </option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="MPV">MPV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Electric Vehicle">Electric Vehicle</option>
          </select>
        </div>
        <button className="rent-button" onClick={handleRentClick}>
          Rent a Car
        </button>
      </div>
    </div>
  );
};

export default Bookingbox;