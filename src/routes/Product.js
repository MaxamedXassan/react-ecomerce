import React from 'react';


import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2';
import NavBar from '../components/NavBar'

const Product = () => {
  return (
    <div>
       <NavBar />
      <HeroImg2 heading="PRODUCTS."text="some of my most recent work." />
       <Footer />
    </div>
  )
}

export default Product