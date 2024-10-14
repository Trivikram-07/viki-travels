import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';
import profilePicture from './profilePic.jpg'; // Replace with your profile picture
import Footer from './Footer'
import useDocumentTitle from './Tittle';
const AboutUs = () => {
  const aboutStyle = {
    backgroundColor: '#f0f8ff',
    marginTop:'90px',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    
    marginBottom: '50px',
  };

  const textStyle = {
    color: '#333',
    lineHeight: '1.6',
    fontSize: '18px',
  };

  const headingStyle = {
    color: '#0056b3',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const socialIconStyle = {
    fontSize: '24px',
    marginRight: '15px',
    color: '#0056b3',
  };

  
  useDocumentTitle('About Us');
  return (
    <>
    <Container style={aboutStyle}>
      <Row>
        <Col md={4}>
          <Image src={profilePicture} alt="D. Trivikram Reddy" fluid />
        </Col>
        <Col md={8}>
          <h2 style={headingStyle}>About us</h2>
          <p style={textStyle}>
            Hello! I'm D. Trivikram Reddy, a passionate front-end developer dedicated to creating seamless and intuitive web experiences. This website was built to simplify the car rental process, ensuring a smooth and user-friendly journey for all customers. With a keen eye for design and functionality, I strive to make digital interactions both beautiful and effective.
          </p>
          <p style={textStyle}>
            My goal is to leverage my skills in web development to provide solutions that enhance user experiences and drive business growth. I believe in continuous learning and adapting to new technologies, and I am committed to delivering high-quality, responsive, and accessible web applications.
          </p>
          <div style={{ marginTop: '20px',color:'black' }}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={socialIconStyle} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={socialIconStyle} />
            </a>
            <FaPhone style={socialIconStyle} /> +123 456 7890
          </div>
        </Col>
      </Row>
    </Container>
    <Footer/>
</>
  );
};

export default AboutUs;
