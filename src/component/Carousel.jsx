import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; // Import the CSS file

const MyHeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/4651130.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Drive with Confidence</h2>
          <p>Choose from a wide range of vehicles that meet your needs and ensure a smooth journey.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Verna/Exterior/pc/March/top-image.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Exceptional Offers</h2>
          <p>Explore our best deals and exclusive offers for a value-packed rental experience.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.theindianwire.com/wp-content/uploads/2024/02/Mahindra-Thar-Earth-Edition.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Comfort Meets Style</h2>
          <p>Experience our premium cars with the latest features and unbeatable comfort.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgd.aeplcdn.com//642x361//n/cw/ec/173635/maruti-suzuki-swift-left-front-three-quarter2.jpeg?isig=0&wm=1&q=75"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h2>Flexible Rentals</h2>
          <p>Rent by the hour, day, or week with our flexible options tailored to your needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyHeroCarousel;
