import React from 'react'
import '../App.css'
import Booking from './Booking'
import '../components/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Info from './Info'
import About from './About'

const Home = () => {
  return (
    <div className='Home'>
      <div className='Background'>
        <div className="background-text">
          <h1>
            LIVE.<br/>
            LOVE.<br/>
            TRAVEL.<br/>
          </h1>
        </div>
        <div className="Navbar" id="navbar">
          <Navbar/>
        </div>
        <div className="Booking" id="home">
          <Booking/> 
        </div>
        <div className="spacer"> </div>
        <div className="Info" id="info">
          <Info/>
        </div>
        
        <div className="about" id="about">
          <About/>
        </div>
        
         <div className="Footer" id="contact">
          <Footer/>
         </div>
       </div>
       
    </div>
  )
}

export default Home