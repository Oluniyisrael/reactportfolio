import React from 'react'
import Navbar from '../../components/portfolioNavBar/Navbar'
import About from '../portfolioAboutPage/About'
import Intro from '../portfolioHomePage/Intro'
import './Portfolio.css'


function Portfolio() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  )
}

export default Portfolio