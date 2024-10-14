import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          {/* Contact Information Section */}
          <Col md={4} style={sectionStyle}>
            <h5 style={headingStyle}>Contact Us</h5>
            <p><i className="fas fa-phone-alt" style={iconStyle}></i> +971 52-333-4444</p>
            <p><i className="fas fa-envelope" style={iconStyle}></i> info@viki.com</p>
            <p><i className="fas fa-map-marker-alt" style={iconStyle}></i> Hyderabad, Water Tower, Office 123</p>
          </Col>

          {/* Viki Travels Description Section */}
          <Col md={4} style={sectionStyle}>
            <h5 style={headingStyle}>Viki Travels</h5>
            <p style={descriptionStyle}>
              Rent a car imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen.
            </p>
          </Col>

          {/* Quick Links and Subscribe Section */}
          <Col md={4} style={sectionStyle}>
            <h5 style={headingStyle}>Quick Links</h5>
            <ul style={linkListStyle}>
              <li><Link to="/Home" style={linkStyle}>Home</Link></li>
              <li><Link to="/About" style={linkStyle}>About</Link></li>
              <li><Link to="/Cars" style={linkStyle}>Cars</Link></li>
              <li><Link to="/Login" style={linkStyle}>Login/SignUp</Link></li>
            </ul>
            <h5 style={headingStyle}>Subscribe</h5>
            <p style={descriptionStyle}>Want to be notified about our services? Just sign up and we'll send you a notification by email.</p>
            <Form>
              <Form.Group controlId="formEmail" style={{ display: 'flex', flexDirection: 'column' }}>
                <Form.Control type="email" placeholder="Your email address" style={emailInputStyle} />
                <Button variant="primary" type="submit" style={subscribeButtonStyle}>
                  Subscribe
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col className="text-center mt-3" style={copyrightStyle}>
            ©2024 Viki Travels. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Styling for the footer component
const footerStyle = {
  backgroundColor: '#023047', // Dark background color
  color: '#FFFFFF', // White text color
  padding: '30px 0',
  fontFamily: 'Arial, sans-serif',
  height: 'auto', // Allow footer to expand based on content
};

const sectionStyle = {
  marginBottom: '20px',
};

const headingStyle = {
  color: '#8ecae6', // Light blue for headings
  fontSize: '18px',
  marginBottom: '15px',
};

const iconStyle = {
  color: '#8ecae6', // Light blue icons
  marginRight: '10px',
};

const descriptionStyle = {
  color: '#e0e0e0',
  fontSize: '14px',
};

const linkListStyle = {
  listStyleType: 'none',
  padding: 0,
};

const linkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '8px',
};

const emailInputStyle = {
  flex: 1,
  marginRight: '10px',
  borderRadius: '0.25rem',
  marginBottom: '10px', // Add space below email input on small screens
};

const subscribeButtonStyle = {
  backgroundColor: '#8ecae6',
  borderColor: '#8ecae6',
  borderRadius: '0.25rem',
  width: '100%', // Make subscribe button fill available width
};

const copyrightStyle = {
  fontSize: '14px',
  color: '#e0e0e0',
};

// Media Queries for Mobile Devices
const mediaQueryStyles = `
  @media (max-width: 767px) {
    ${footerStyle}
    ${emailInputStyle}
    ${subscribeButtonStyle}
  }
`;

export default Footer;
