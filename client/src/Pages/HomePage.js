
import React from 'react'
import Cardswiper from '../Components/cardswiper/Cardswiper'
import Slider from '../Components/Carousuel/Slider'
import Gallery from '../Components/Gallery/Gallery'
import Navbar from '../Components/Navbar/Navbar'

function HomePage() {
  return (
    <div>
      <Navbar/>  
      <Slider/>  
      <Cardswiper/>  
      <Gallery/>
    </div>
  )
}

export default HomePage
