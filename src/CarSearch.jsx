import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGear, faUsers, faTachometerAlt, faBatteryHalf } from '@fortawesome/free-solid-svg-icons';
import CarsList from './CarsList'; // Ensure this file is correctly imported
import { useNavigate } from 'react-router-dom';

const CarSearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCars = CarsList.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleBookNow = (car) => {
    navigate('/Booking_page', { state: { car } });
  };

  return (
    <Container fluid style={{ margin: '0px', padding: '20px', backgroundColor: '#dda15e',color:'white' ,  marginTop:'70px',}}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold',  textAlign: 'center', marginBottom: '20px' }}>
        Car Search
      </h1>
      <Form style={{ marginBottom: '40px' }}>
        <Form.Control
          type="text"
          placeholder="Search for cars..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ fontSize: '18px', padding: '10px', borderRadius: '5px', borderColor: '#007bff' }}
        />
      </Form>
      {searchQuery && (
        filteredCars.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>No results found.</p>
        ) : (
          <Row className="justify-content-center" style={{ gap: '120px' }}>
            {filteredCars.map((car, index) => (
              <Col xs={16} md={5} lg={3} key={index} className="d-flex justify-content-center">
                <Card
                  style={{
                    width: '100%',
                    maxWidth: '800px',
                    border: 'none',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
                    margin: '20px',
                  }}
                >
                  <Card.Img variant="top" src={car.image} style={{ width: '100%', height: '300px', objectFit: 'cover', borderBottom: '4px solid #007bff' }} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff', textAlign: 'center', margin: '15px 0' }}>
                      {car.name}
                    </Card.Title>
                    <Card.Text style={{ fontSize: '16px', color: '#555', textAlign: 'center', marginBottom: '15px', lineHeight: '1.5' }}>
                      <div>
                        <FontAwesomeIcon icon={faBatteryHalf} style={{ marginRight: '10px', color: '#007bff' }} />
                        Battery Life: {car.batteryLife}
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
        )
      )}
    </Container>
  );
};

export default CarSearch;
