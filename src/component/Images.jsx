import React from "react";
import Slider from "./Slider";

const items = [
  {  name: 'Toyota Innova Crysta',
    image: 'https://ic1.maxabout.us/autos/cars_india/N/2022/3/new-toyota-innova-crysta-price-in-india.jpg',
    pricePerDay: '₹4,000',
    airbags: 2,
    transmission: 'Automatic',
    seats: 7,
    mileage: '12 km/l',
  },
  {name: 'Tata Tigor', 
    image: 'https://th.bing.com/th/id/OIP.0BBRrAlcQVlL1VJfrvdRkQHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,300',
    airbags: 2,
    transmission: 'Manual',
    seats: 5,
    mileage: '19 km/l',
  },
  {
    name: 'MG Hector',
    image: 'https://i.pinimg.com/originals/93/1f/88/931f88041842f30b05515b6d04d11903.jpg',
    pricePerDay: '₹5,000',
    airbags: 6,
    transmission: 'Automatic',
    seats: 5,
    mileage: '14 km/l',
  },
  {
    name: 'Tata Tiago EV',
    image: 'https://th.bing.com/th/id/OIP.4oothpfBTpJWKUA25NBhPwHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,800',
    airbags: 2,
    transmission: 'Automatic',
    seats: 5,
    range: '250 km', 
  },
  { name: 'Nissan Micra',
    image: 'https://th.bing.com/th/id/OIP.S7TSQmdCBhbBUjOybc9QLQHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,000',
    airbags: 2,
    transmission: 'Automatic',
    seats: 5,
    mileage: '19 km/l',
  }, 
];

const Images = () => {
  return (
    <div>
      <h1 className="imageSliderHead" style={{ color:'black' }}>All the vehicles that you wish are available here</h1>
      <Slider items={items} />
    </div>
  );
};

export default Images;
