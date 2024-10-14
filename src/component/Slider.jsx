import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Slider = ({ items = [] }) => {
  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      setTimeout(() => {
        const owl = window.$('.owl-carousel');

        owl.owlCarousel({
          items: 3,
          loop: true,
          margin: 20,
          nav: false,
          dots: false,
          center: true,
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 3,
            },
          },
          onInitialized: adjustCenterItem,
          onTranslated: adjustCenterItem,
        });

        document.querySelector('.custom-prev').addEventListener('click', () => {
          owl.trigger('prev.owl.carousel');
        });

        document.querySelector('.custom-next').addEventListener('click', () => {
          owl.trigger('next.owl.carousel');
        });
      }, 100);
    } else {
      console.error('jQuery or Owl Carousel is not loaded properly.');
    }
  }, [items]);

  const adjustCenterItem = () => {
    window.$('.owl-item').each(function () {
      if (window.$(this).hasClass('active')) {
        window.$(this).removeClass('center-slide');
        if (window.$(this).hasClass('center')) {
          window.$(this).addClass('center-slide');
        }
      }
    });
  };

  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/Cars'); // Replace '/Cars' with the actual path to your Cars component
  };

  // Inline styles
  const containerStyle = {
    position: 'relative',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    marginBottom: '30px', // Margin below the Slider component
  };

  const navButtonStyle = {
    position: 'absolute',
    top: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const prevButtonStyle = {
    ...navButtonStyle,
    left: '10px',
  };

  const nextButtonStyle = {
    ...navButtonStyle,
    right: '10px',
  };

  const carouselItemStyle = {
    transition: 'transform 0.5s ease',
    display: 'flex',
    justifyContent: 'center',
    height: '100%', // Fill the fixed height of the container
  };

  const cardStyle = {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'box-shadow 0.5s ease, transform 0.5s ease',
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '100%',
    height: '100%', // Fill the fixed height of the container
  };

  const cardHoverStyle = {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
    transform: 'scale(1.05)',
  };

  const cardImageStyle = {
    width: '100%',
    height: 'auto',
    aspectRatio: '16 / 9', // Maintain aspect ratio of images
    objectFit: 'cover',
    borderBottom: '2px solid #007bff',
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const cardTextStyle = {
    fontSize: '0.9rem',
    color: '#666',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    fontSize: '14px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.5s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <button className="custom-prev" style={prevButtonStyle}>&lt;</button>
      <button className="custom-next" style={nextButtonStyle}>&gt;</button>

      <div className="owl-carousel owl-theme custom-carousel">
        {items.map((item, index) => (
          <div className="item" key={index} style={carouselItemStyle}>
            <Card style={cardStyle} className="carousel-card">
              <Card.Img variant="top" src={item.image} alt={`Slide ${index}`} style={cardImageStyle} />
              <Card.Body>
                <Card.Title style={cardTitleStyle}>{item.name}</Card.Title>
                <Card.Text style={cardTextStyle} className="card-text">
                  <strong>Transmission Capacity:</strong> {item.transmission}<br />
                  <strong>Number of Airbags:</strong> {item.airbags}<br />
                  <strong>Cost Per Day:</strong> {item.pricePerDay}
                </Card.Text>
                <Button 
                  variant="primary" 
                  style={buttonStyle} 
                  onClick={handleButton}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                >
                  Show Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
