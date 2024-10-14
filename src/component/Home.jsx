import React from 'react'
import MyHeroCarousel from './Carousel'
import H2 from './H2'
import Bookingbox from '../Bookingbox'
import Process from './Process'
import Images from './Images'
import ReviewCarousel from './Review'
import Footer from './Footer'
import useDocumentTitle from './Tittle';

const Home = () => {

  useDocumentTitle('Home ');
  return (
    <div>
       <MyHeroCarousel/> 
       <H2/> 
      <Bookingbox/>
      <Images/>
      <Process/>
      <ReviewCarousel/>
      <Footer/>
    </div>
  )
}

export default Home
