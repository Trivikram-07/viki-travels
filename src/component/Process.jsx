import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHeadset, faSmile } from '@fortawesome/free-solid-svg-icons';
import './Process.css'; // Import the CSS file

const Process = () => {
  return (
    <div className="process-container">
      <div className="aspect-ratio-wrapper">
        <div className="aspect-ratio-content">
          <h1 className="heading">
            Here’s the Process to Book a Car on Our Website
          </h1>
          <div className="steps">
            {[{
              icon: faCar,
              title: 'Choose A Car',
              description: 'View our range of cars, find your perfect car for the coming days.'
            }, {
              icon: faHeadset,
              title: 'Fill the Details',
              description: 'Fill all the necessary details required for the booking.'
            }, {
              icon: faSmile,
              title: 'Enjoy Driving',
              description: 'Receive the key and enjoy your car. We treat all our cars with respect.'
            }].map((step, index) => (
              <div
                key={index}
                className="step"
              >
                <div className="step-icon">
                  <FontAwesomeIcon icon={step.icon} />
                </div>
                <div className="step-content">
                  <h2 className="step-title">{step.title}</h2>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
