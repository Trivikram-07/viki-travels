import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './H2.css'; // Import the external CSS file

const H2 = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        <img
          src="https://img.philkotse.com/2017/09/16/rH8MucxC/1-1006.jpg"
          alt="Car Image"
          className="image"
        />
        <div className="text-content">
          <div className="headingX">Discover the Ultimate Car Rental Experience</div>
          <p className="paragraph">
            From luxurious vehicles to budget-friendly options, our car rental service is designed to meet all your travel needs. Explore our wide range of cars and enjoy unparalleled flexibility and convenience.
          </p>
          <div className="icon-container">
            <div className="icon-itemX">
              <FontAwesomeIcon icon={faCheck} />
              <span className="icon-textX">Affordable Rates</span>
            
              <FontAwesomeIcon icon={faCheck} />
              <span className="icon-textX">Wide Selection</span>
            
            
              <FontAwesomeIcon icon={faCheck} />
              <span className="icon-textX">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H2;
