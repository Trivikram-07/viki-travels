import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGear, faUsers, faTachometerAlt, faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Vehicles from './CarsList'; // Adjust the path as necessary

const Sedans = () => {
  const navigate = useNavigate();
  const sedanList = Vehicles.filter(car => car.type === 'Sedan');

  // State to manage the hovered card
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleBookNow = (car) => {
    navigate('/Booking_page', { state: { car } });
  };

  return (
    <Container fluid style={{ margin: '0px', padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '20px', marginTop: '50px' }}>
        Sedans
      </h1>
      <p style={{ fontSize: '18px', color: '#666', textAlign: 'center', marginBottom: '40px', lineHeight: '1.5' }}>
        A classic car style known for its comfortable ride, sleek design, and fuel efficiency, perfect for daily commutes and long journeys.
      </p>
      <Row className="justify-content-center" style={{ gap: '120px' }}>
        {sedanList.map((car, index) => (
          <Col xs={12} md={5} lg={3} key={index} className="d-flex justify-content-center">
            <Card
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              style={{
                width: '100%',
                maxWidth: '800px',
                border: 'none',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: hoveredCardIndex === index ? '0 8px 24px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.2)',
                backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                transform: hoveredCardIndex === index ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <Card.Img variant="top" src={car.image} style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '4px solid #007bff' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff', textAlign: 'center', margin: '15px 0' }}>
                  {car.name}
                </Card.Title>
                <Card.Text style={{ fontSize: '16px', color: '#555', textAlign: 'center', marginBottom: '15px', lineHeight: '1.5' }}>
                  <div>
                    <FontAwesomeIcon icon={faAirFreshener} style={{ marginRight: '10px', color: '#007bff' }} />
                    Airbags: {car.airbags}
                    <FontAwesomeIcon icon={faGear} style={{ marginRight: '10px', color: '#007bff', marginLeft: '20px' }} />
                    Transmission: {car.transmission}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: '10px', color: '#007bff' }} />
                    Seats: {car.seats}
                    <FontAwesomeIcon icon={faTachometerAlt} style={{ marginRight: '10px', color: '#007bff', marginLeft: '20px' }} />
                    Mileage: {car.mileage}
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <FontAwesomeIcon icon={faCar} style={{ marginRight: '10px', color: '#007bff' }} />
                    Price Per Day: {car.pricePerDay}
                  </div>
                </Card.Text>
                <Button
                  variant="primary"
                  style={{
                    display: 'block',
                    width: '100%',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s, transform 0.3s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#0056b3';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#007bff';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={() => handleBookNow(car)}
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sedans;
