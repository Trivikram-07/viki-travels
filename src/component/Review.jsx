import React, { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';

const Review = () => {
  const carouselRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      picture: 'https://images.unsplash.com/photo-1548810020-ea2f1da35cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxsSWRVMFUzMkZ4Y3x8ZW58MHx8fHx8',
      comment: 'Excellent service and great cars! I was particularly impressed with the cleanliness and condition of the vehicle I rented.  Highly recommend to anyone looking for reliable car rentals!',
      stars: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      picture: 'https://images.unsplash.com/photo-1600603405959-6d623e92445c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxsSWRVMFUzMkZ4Y3x8ZW58MHx8fHx8',
      comment: ' The car was in excellent condition, and the pickup and return process was smooth and efficient. Will definitely use this service again!',
      stars: 4,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      picture: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxsSWRVMFUzMkZ4Y3x8ZW58MHx8fHx8',
      comment: 'I appreciated the flexibility in booking options.. Highly recommended for anyone seeking affordable and quality car rentals.',
      stars: 4,
    },
  ];

  useEffect(() => {
    const initializeCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel) {
        setTimeout(() => {
          const owl = window.$(carouselRef.current);

          owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
              0: {
                items: 1,
              },
              768: {
                items: 3,
              },
            },
            onInitialized: addCenterClass,
            onTranslated: addCenterClass,
          });

          // Handle custom navigation
          prevButtonRef.current.addEventListener('click', () => {
            owl.trigger('prev.owl.carousel');
          });

          nextButtonRef.current.addEventListener('click', () => {
            owl.trigger('next.owl.carousel');
          });
        }, 100);
      } else {
        console.error('jQuery or Owl Carousel is not loaded properly.');
      }
    };

    initializeCarousel();

    return () => {
      if (prevButtonRef.current && nextButtonRef.current) {
        prevButtonRef.current.removeEventListener('click', () => {});
        nextButtonRef.current.removeEventListener('click', () => {});
      }
    };
  }, []);

  const addCenterClass = () => {
    window.$('.owl-item').removeClass('review-center-slide');
    window.$('.owl-item.active.center').addClass('review-center-slide');
  };

  const sliderContainerStyle = {
    position: 'relative',
    padding: '40px 0',
  };

  const customNavButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#fff',
    border: 'none',
    padding: '15px',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: '1000',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const carouselItemStyle = {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const carouselCardStyle = {
    width: '350px', // Increased width
    height: '400px', // Increased height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: 'none',
    borderRadius: '12px',
    padding: '20px', // Increased padding
    backgroundColor: '#023047',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
  };

  const reviewerPictureStyle = {
    width: '100px', // Increased size
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
    border: '3px solid #8ecae6',
    padding: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const reviewerNameStyle = {
    fontSize: '22px', // Increased font size
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '10px',
  };

  const reviewCommentStyle = {
    fontSize: '16px',
    fontStyle: 'italic',
    marginBottom: '15px',
    color: '#8ecae6',
  };

  const reviewStarsStyle = {
    fontSize: '24px',
    color: '#FFD700',
    marginTop: '10px',
  };

  return (
    <>
      <h1 style={{ color:'black', textAlign:'center', marginTop:'40px', textDecoration:'underline' }}>
        Customer Reviews
      </h1>
      <div className="slider-container" style={sliderContainerStyle}>
        {/* Custom navigation arrows */}
        <button
          className="custom-prev"
          ref={prevButtonRef}
          style={{ ...customNavButtonStyle, left: '20px' }}
        >
          &#8249;
        </button>
        <button
          className="custom-next"
          ref={nextButtonRef}
          style={{ ...customNavButtonStyle, right: '20px' }}
        >
          &#8250;
        </button>

        <div className="owl-carousel owl-theme" ref={carouselRef}>
          {reviews.map((review) => (
            <div className="item" key={review.id} style={carouselItemStyle}>
              <Card className="carousel-card" style={carouselCardStyle}>
                <Card.Img
                  variant="top"
                  src={review.picture}
                  alt={review.name}
                  className="reviewer-picture"
                  style={reviewerPictureStyle}
                />
                <Card.Body>
                  <Card.Title className="reviewer-name" style={reviewerNameStyle}>
                    {review.name}
                  </Card.Title>
                  <Card.Text className="review-comment" style={reviewCommentStyle}>
                    "{review.comment}"
                  </Card.Text>
                  <div className="review-stars" style={reviewStarsStyle}>
                    {'★'.repeat(review.stars)}
                    {'☆'.repeat(5 - review.stars)}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
