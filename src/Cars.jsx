import React from 'react'
import Sedans from './sedans'
import SUVs from './Suvs'
import Hatchbacks from './Hatchbacks'
import MPVs from './Mpvs'
import Bookingbox from './Bookingbox'
import Footer from './component/Footer'
import ElectricCars from './Evs'
import CarSearch from './CarSearch'
import useDocumentTitle from './component/Tittle';
const Cars = () => {
  
  useDocumentTitle('Cars ');
  return (
    <div>
      <CarSearch/>
      <SUVs/> 
      <Sedans/>
      <MPVs/>
      <Hatchbacks/>
      <ElectricCars/>
      {/* <Bookingbox/> */}
      <Footer/>
    </div>
  )
}

export default Cars
