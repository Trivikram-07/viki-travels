import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Image, Alert } from 'react-bootstrap';
import './BookingPage.css'; // Updated CSS for a more appealing design
import useDocumentTitle from './component/Tittle';

const BookingPage = () => {
  useDocumentTitle('Booking Car');
  const location = useLocation();
  const navigate = useNavigate();
  const { car } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    carName: car ? car.name : '',
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    driverNeeded: false,
    totalDays: 0,
    totalPrice: 0,
    pickupSpot: '',
    dropOffSpot: '',
  });

  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Validate date inputs
  const validateDates = () => {
    const now = new Date();
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    let errors = {};

    if (startDate < now) {
      errors.startDate = 'Start date must be in the future.';
    }

    if (endDate < now) {
      errors.endDate = 'End date must be in the future.';
    }

    if (startDate && endDate && endDate <= startDate) {
      errors.endDate = 'End date must be after the start date.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Calculate days and price
  const calculateDaysAndPrice = () => {
    if (!validateDates()) return;

    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    const difference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) || 0; // Ensure difference is not NaN

    const pricePerDay = parseFloat(car.pricePerDay.replace(/[^\d.-]/g, '')) || 0; // Ensure pricePerDay is a number
    const driverFeePerDay = formData.driverNeeded ? 500 : 0;
    const totalPrice = difference * (pricePerDay + driverFeePerDay);

    setFormData(prevState => ({
      ...prevState,
      totalDays: difference,
      totalPrice: totalPrice,
    }));
  };

  useEffect(() => {
    calculateDaysAndPrice();
  }, [formData.startDate, formData.endDate, formData.driverNeeded]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateDates()) {
      console.log('Booking submitted:', formData);
      setShowThankYou(true);
    }
  };

  if (!car) {
    return <div>No car selected. Please choose a car first.</div>;
  }

  return (
    <div className="unique-booking-container mt-5">
      {showThankYou ? (
        <div className="unique-thank-you-message">
          <h1 className="unique-thank-you-heading">Thank You!</h1>
          <p className="unique-thank-you-text">Your booking has been successfully processed. Pack your bags!</p>
          <Image src="https://c.tenor.com/6ZkJEn80W7kAAAAC/green-tick.gif" alt="Checkmark" className="unique-thank-you-image" />
          <p className="unique-thank-you-footer">Thank you for choosing us. See you in the car.</p>
        </div>
      ) : (
        <>
          <h1 className="unique-booking-heading" style={{marginTop:'20px'}}>Book Your Electric Car</h1>
          <Row>
            <Col md={6}>
              <Image 
                src={car.image} 
                alt={car.name} 
                className="unique-car-image"
              />
              <h2 className="unique-car-name">{car.name}</h2>
              <p className="unique-car-price">Price per day: {car.pricePerDay}</p>
            </Col>
            <Col md={6}>
              <Form onSubmit={handleSubmit} className="unique-booking-form">
                {errors.startDate && <Alert variant="danger">{errors.startDate}</Alert>}
                {errors.endDate && <Alert variant="danger">{errors.endDate}</Alert>}

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">Car</Form.Label>
                  <Form.Control
                    type="text"
                    name="carName"
                    value={formData.carName}
                    readOnly
                    className="unique-form-control"
                  />
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="unique-form-control"
                  />
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="unique-form-control"
                  />
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="unique-form-control"
                  />
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">Pickup Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="pickupSpot"
                    value={formData.pickupSpot}
                    onChange={handleChange}
                    required
                    className="unique-form-control"
                  />
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">Drop-off Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="dropOffSpot"
                    value={formData.dropOffSpot}
                    onChange={handleChange}
                    required
                    className="unique-form-control"
                  />
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="unique-form-control"
                  />
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">End Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    className="unique-form-control"
                  />
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">Payment Method</Form.Label>
                  <Form.Control
                    as="select"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                    className="unique-form-control"
                  >
                    <option value="">Select Payment Method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="debitCard">Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bankTransfer">Bank Transfer</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Check
                    type="checkbox"
                    name="driverNeeded"
                    label="Need a driver? (₹500/day)"
                    checked={formData.driverNeeded}
                    onChange={handleChange}
                    className="unique-form-check"
                  />
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">Total Days</Form.Label>
                  <p style={{ fontSize: '28px',color:'green' }}>{formData.totalDays} days</p>
                </Form.Group>

                <Form.Group className="unique-form-group">
                  <Form.Label className="unique-form-label">Total Price</Form.Label>
                  <p style={{ fontSize: '48px',color:'orange' }}>₹{formData.totalPrice.toFixed(2)}</p>
                </Form.Group>

                <Button type="submit" variant="primary" className="unique-submit-button">
                  Book Now
                </Button>
              </Form>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default BookingPage;
