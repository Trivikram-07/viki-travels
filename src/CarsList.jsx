const Vehicles = [
  // Hatchbacks
  {
    id: 1,
    name: 'Maruti Suzuki Swift',
    image: 'https://th.bing.com/th/id/OIP.OOD7TSiKZXIKEqYNYM-J5gHaE7?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹1,800',
    airbags: 2,
    transmission: 'Manual',
    seats: 5,
    mileage: '21 km/l',
    type: 'Hatchback',
  },
  {
    id: 2,
    name: 'Hyundai i20',
    image: 'https://th.bing.com/th/id/OIP.k9oA2wOuOjKi6SOY8tozDQHaD4?w=325&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,000',
    airbags: 2,
    transmission: 'Automatic',
    seats: 5,
    mileage: '19 km/l',
    type: 'Hatchback',
  },
  {
    id: 3,
    name: 'Tata Altroz',
    image: 'http://ts3.mm.bing.net/th?id=OIP.WaFWSOe-28c5wLA-rK0gywHaD4&pid=15.1',
    pricePerDay: '₹2,100',
    airbags: 2,
    transmission: 'Manual',
    seats: 5,
    mileage: '18 km/l',
    type: 'Hatchback',
  },
  {
    id: 4,
    name: 'Volkswagen Polo',
    image: 'https://cdni.autocarindia.com/ExtraImages/20210422110750_VW_polo_2021_front.jpg',
    pricePerDay: '₹2,500',
    airbags: 4,
    transmission: 'Manual',
    seats: 5,
    mileage: '17 km/l',
    type: 'Hatchback',
  },
  {
    id: 5,
    name: 'Honda Jazz',
    image: 'https://th.bing.com/th/id/OIP.a-HHY3Y2JA00vXZwp9jRbAHaDt?w=277&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,700',
    airbags: 4,
    transmission: 'Automatic',
    seats: 5,
    mileage: '16 km/l',
    type: 'Hatchback',
  },
  {
    id: 6,
    name: 'Maruti Suzuki Baleno',
    image: 'https://th.bing.com/th/id/OIP.8MvPX4Ygg7rAwnFqSjPn6wHaEK?w=332&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,200',
    airbags: 2,
    transmission: 'Manual',
    seats: 5,
    mileage: '23 km/l',
    type: 'Hatchback',
  },
  {
    id:7,
    name: 'Ford Figo',
    image: 'https://th.bing.com/th/id/OIP.LhlgUTKkz3hYWJV06LI_NQHaE8?w=229&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,300',
    airbags: 2,
    transmission: 'Manual',
    seats: 5,
    mileage: '18 km/l',
    type: 'Hatchback',
  },
  {
    id:8,
    name: 'Renault Kwid',
    image: 'https://th.bing.com/th/id/OIP.tdWRN72cfOCrAZsPh8VFpwHaE8?w=356&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹1,500',
    airbags: 2,
    transmission: 'Manual',
    seats: 5,
    mileage: '25 km/l',
    type: 'Hatchback',
  },
  {
    id:9,
    name: 'Nissan Micra',
    image: 'https://th.bing.com/th/id/OIP.S7TSQmdCBhbBUjOybc9QLQHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,000',
    airbags: 2,
    transmission: 'Automatic',
    seats: 5,
    mileage: '19 km/l',
    type: 'Hatchback',
  },
  {
    id:10,
    name: 'Toyota Glanza',
    image: 'https://th.bing.com/th/id/OIP.MLwZtGnBDvDvmc6I9wwBJwAAAA?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,400',
    airbags: 2,
    transmission: 'Manual',
    seats: 5,
    mileage: '21 km/l',
    type: 'Hatchback',
  },
  
  {
    id: 11,
    name: 'Maruti Suzuki Dzire',
    image: 'https://th.bing.com/th/id/OIP.ZFVCaQ3XysuyOmEIXNV-pgHaE6?w=274&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,000',
    airbags: 2,
    transmission: 'Manual',
    seats: 5,
    mileage: '23 km/l',
    type: 'Sedan',
  },
  {
    id: 12,
    name: 'Honda Amaze',
    image: 'https://th.bing.com/th/id/OIP.3NsTcFpoJPyw5-yOmQjfIwHaE6?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,200',
    airbags: 2,
    transmission: 'Automatic',
    seats: 5,
    mileage: '18 km/l',
    type: 'Sedan',
  },
  {
    id : 13,
    name: 'Hyundai Aura',
    image: 'https://th.bing.com/th/id/OIP.Xqsk9oAkF1UWW1TCziTchwHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,500',
    airbags: 2,
    transmission: 'Manual',
    seats: 5,
    mileage: '20 km/l',
    type: 'Sedan',
  },
  {
    id : 14,
    name: 'Tata Tigor',
    image: 'https://th.bing.com/th/id/OIP.0BBRrAlcQVlL1VJfrvdRkQHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,300',
    airbags: 2,
    transmission: 'Manual',
    seats: 5,
    mileage: '19 km/l',
    type: 'Sedan',
  },
  {
    id : 15,
    name: 'Toyota Yaris',
    image: 'https://th.bing.com/th/id/OIP.T-f5o3rBrXRFP6t_EtKB8QHaFO?w=264&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹3,000',
    airbags: 7,
    transmission: 'Automatic',
    seats: 5,
    mileage: '17 km/l',
    type: 'Sedan',
  },
  {
    id: 16,
    name: 'Skoda Rapid',
    image: 'https://www.drivespark.com/img/2018/02/skoda-rapid-front-design-1519296797.jpg',
    pricePerDay: '₹3,200',
    airbags: 4,
    transmission: 'Manual',
    seats: 5,
    mileage: '16 km/l',
    type: 'Sedan',
  },
  {
    id: 17,
    name: 'Hyndai Verna',
    image: 'https://th.bing.com/th/id/OIP.Mo-UpfL9ICxp6j3tylt80gHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹3,400',
    airbags: 4,
    transmission: 'Automatic',
    seats: 5,
    mileage: '18 km/l',
    type: 'Sedan',
  },
  {
    id: 18,
    name: 'Honda City',
    image: 'https://th.bing.com/th/id/OIP.biIcS81Dk3H6Om20NyBB8wHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹4,000',
    airbags: 6,
    transmission: 'Manual',
    seats: 5,
    mileage: '20 km/l',
    type: 'Sedan',
  },
  {
    id: 19,
    name: 'Mercedes-Benz A-Class',
    image: 'https://th.bing.com/th/id/OIP.cZdEOwx4DmeXQ6Y5Wu9l0AAAAA?rs=1&pid=ImgDetMain',
    pricePerDay: '₹12,000',
    airbags: 6,
    transmission: 'Automatic',
    seats: 5,
    mileage: '15 km/l',
    type: 'Sedan',
  },
  {
    id: 20,
    name: 'BMW 3 Series',
    image: 'http://ts1.mm.bing.net/th?id=OIP.1vI9pxgoWJfejqyKhRxPrAHaE8&pid=15.1',
    pricePerDay: '₹15,000',
    airbags: 6,
    transmission: 'Automatic',
    seats: 5,
    mileage: '14 km/l',
    type: 'Sedan',
  },
  {
    id: 21,
    name: 'Toyota Innova Crysta',
    image: 'https://ic1.maxabout.us/autos/cars_india/N/2022/3/new-toyota-innova-crysta-price-in-india.jpg',
    pricePerDay: '₹4,000',
    airbags: 2,
    transmission: 'Automatic',
    seats: 7,
    mileage: '12 km/l',
    type: 'MPV',
  },
  { 
    id: 22,
    name: 'Maruti Suzuki Ertiga',
    image: 'http://ts3.mm.bing.net/th?id=OIP.VmwPOppIk1pKDFJgqoJuSQHaE6&pid=15.1',
    pricePerDay: '₹2,800',
    airbags: 2,
    transmission: 'Manual',
    seats: 7,
    mileage: '17 km/l',
    type: 'MPV',
  },
  {
    id: 23,
    name: 'Mahindra Marazzo',
    image: 'https://th.bing.com/th/id/OIP.cyiBrkDAC3mZcw360XG3pQHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹3,500',
    airbags: 4,
    transmission: 'Manual',
    seats: 7,
    mileage: '14 km/l',
    type: 'MPV',
  },
  {
    id: 24,
    name: 'Kia Carnival',
    image: 'https://th.bing.com/th/id/OIP.kawbqlTclUrwlFmJg1bTigAAAA?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹5,500',
    airbags: 6,
    transmission: 'Automatic',
    seats: 8,
    mileage: '13 km/l',
    type: 'MPV',
  },
  {
    id: 25,
    name: 'Renault Triber',
    image: 'https://th.bing.com/th/id/OIP.EJ-MkwfrHT_WQDEIwJe74QHaEw?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,200',
    airbags: 2,
    transmission: 'Manual',
    seats: 7,
    mileage: '18 km/l',
    type: 'MPV',
  },
  {
    id: 26,
    name: 'Maruti Suzuki XL6',
    image: 'https://th.bing.com/th/id/OIP.8sT2nTah83OqXLnsFN_-ZwHaE6?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹3,000',
    airbags: 2,
    transmission: 'Automatic',
    seats: 6,
    mileage: '17 km/l',
    type: 'MPV',
  },
  {
    id: 27,
    name: 'Toyota Vellfire',
    image: 'https://th.bing.com/th/id/OIP.TKibBS-s61zDUIQBQeQ7ZwHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹15,000',
    airbags: 6,
    transmission: 'Automatic',
    seats: 7,
    mileage: '10 km/l',
    type: 'MPV',
  },
  {
    id: 28,
    name: 'Honda Mobilio',
    image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https:%2f%2fcdni.autocarindia.com%2fExtraImages%2f20140723041635_mobwhite.jpg&h=795&w=1200&c=1',
    pricePerDay: '₹2,700',
    airbags: 2,
    transmission: 'Manual',
    seats: 7,
    mileage: '16 km/l',
    type: 'MPV',
  },
  {
    id: 29,
    name: 'Ford Tourneo Custom',
    image: 'http://ts1.mm.bing.net/th?id=OIP.xjF9UA5fJ3fBhxmguO9eaQHaFj&pid=15.1',
    pricePerDay: '₹6,000',
    airbags: 4,
    transmission: 'Manual',
    seats: 8,
    mileage: '11 km/l',
    type: 'MPV',
  },
  {
    id: 30,
    name: 'Hyundai Stargazer',
    image: 'https://th.bing.com/th/id/OIP.2B8hCnKVhhM6Alony9BBiAHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹4,800',
    airbags: 4,
    transmission: 'Automatic',
    seats: 7,
    mileage: '12 km/l',
    type: 'MPV',
  },
  {
    id: 31,
    name: 'Hyundai Creta',
    image: 'https://www.cartoq.com/wp-content/uploads/2023/03/2023-hyundai-creta-n-line-14.jpg',
    pricePerDay: '₹3,500',
    airbags: 2,
    transmission: 'Automatic',
    seats: 5,
    mileage: '16 km/l',
    type: 'SUV',
  },
  {
    id: 32,
    name: 'Kia Seltos',
    image: 'https://www.hdcarwallpapers.com/download/kia_seltos_2023_4k-2560x1440.jpg',
    pricePerDay: '₹3,800',
    airbags: 6,
    transmission: 'Manual',
    seats: 5,
    mileage: '17 km/l',
    type: 'SUV',
  },
  {
    id: 33,
    name: 'Mahindra XUV300',
    image: 'https://wallpapercave.com/wp/wp4917260.jpg',
    pricePerDay: '₹4,000',
    airbags: 7,
    transmission: 'Automatic',
    seats: 5,
    mileage: '18 km/l',
    type: 'SUV',
  },
  {
    id: 34,
    name: 'Tata Harrier',
    image: 'https://www.team-bhp.com/?q=sites/default/files/styles/check_extra_large_for_review/public/Harrier5_2.png',
    pricePerDay: '₹4,500',
    airbags: 6,
    transmission: 'Manual',
    seats: 5,
    mileage: '15 km/l',
    type: 'SUV',
  },
  {
    id: 35,
    name: 'MG Hector',
    image: 'https://i.pinimg.com/originals/93/1f/88/931f88041842f30b05515b6d04d11903.jpg',
    pricePerDay: '₹5,000',
    airbags: 6,
    transmission: 'Automatic',
    seats: 5,
    mileage: '14 km/l',
    type: 'SUV',
  },
  {
    id: 36,
    name: 'Ford Endeavour',
    image: 'https://th.bing.com/th/id/R.3e536a1b21171bf1eefafc2bc66a6b6d?rik=yhrDf2i4w6tVbw&riu=http%3a%2f%2fwww.earlpart.co.uk%2fwp-content%2fuploads%2f2019%2f08%2f50450_Ford-Endeavour_001-1919x1079.jpg&ehk=DrgSV%2bPNmh%2bKbkifRyMBnypZug7m86NSU8V4N5MVZOw%3d&risl=&pid=ImgRaw&r=0',
    pricePerDay: '₹7,500',
    airbags: 7,
    transmission: 'Automatic',
    seats: 7,
    mileage: '12 km/l',
    type: 'SUV',
  },
  {
    id: 37,
    name: 'Toyota Fortuner',
    image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http:%2f%2fcdni.autocarindia.com%2fReviews%2fFortuner-static.jpg&c=0',
    pricePerDay: '₹8,500',
    airbags: 7,
    transmission: 'Manual',
    seats: 7,
    mileage: '11 km/l',
    type: 'SUV',
  },
  {
    id: 38,
    name: 'Mahindra Thar',
    image: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/50345/mahindra-thar-2020-left-front-three-quarter34.jpeg?wm=1&q=85',
    pricePerDay: '₹6,000',
    airbags: 2,
    transmission: 'Manual',
    seats: 4,
    mileage: '10 km/l',
    type: 'SUV',
  },
  {
    id: 39,
    name: 'Range Rover Evoque',
    image: 'https://media.autoexpress.co.uk/image/private/s--CvlTO-6z--/v1563182800/autoexpress/2019/02/01_21.jpg',
    pricePerDay: '₹18,000',
    airbags: 6,
    transmission: 'Automatic',
    seats: 5,
    mileage: '9 km/l',
    type: 'SUV',
  },
  {
    id: 40,
    name: 'Mercedes-Benz GLC',
    image: 'https://assets-eu-01.kc-usercontent.com/bb5aba31-d98c-0160-8548-418b3723c58e/d062495e-08dd-43d5-b556-f7d054fbaf3e/Mercedes%20GLC%20Coupe%20(8).jpg?fm=jpg&auto=format',
    pricePerDay: '₹20,000',
    airbags: 7,
    transmission: 'Automatic',
    seats: 5,
    mileage: '8 km/l',
    type: 'SUV',
  },
  {
    id: 41,
    name: 'Tata Tiago EV',
    image: 'https://th.bing.com/th/id/OIP.4oothpfBTpJWKUA25NBhPwHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹2,800',
    airbags: 2,
    transmission: 'Automatic',
    seats: 5,
    range: '250 km', 
    type: 'EV',
  },
  {
    id: 42,
    name: 'Tata Tigor EV',
    image: 'https://th.bing.com/th/id/OIP.0BBRrAlcQVlL1VJfrvdRkQHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹3,200',
    airbags: 2,
    transmission: 'Automatic',
    seats: 5,
    range: '220 km',
    type: 'EV',
  },
  {
    id: 43,
    name: 'Tata Curve EV',
    image: 'https://th.bing.com/th/id/OIP.TY6lcdmucD8l2DLX5yzj8wHaEo?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹3,500',
    airbags: 4,
    transmission: 'Automatic',
    seats: 5,
    range: '200 km',
    type: 'EV',
  },
  {
    id: 44,
    name: 'Mahindra XUV 400 EV',
    image: 'https://th.bing.com/th/id/OIP.UHQrNprAU-FXK0hYYHesIQHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    pricePerDay: '₹4,000',
    airbags: 6,
    transmission: 'Automatic',
    seats: 5,
    range: '180 km',
    type: 'EV',
  },
];
export default Vehicles;