import React from 'react'
import Navbar from '../../components/portfolioNavBar/Navbar'
import About from '../portfolioAboutPage/About'
import Intro from '../portfolioHomePage/Intro'
import Resume from '../portfolioResume/Resume'
import Works from '../portfolioWorks/Works'
import './Portfolio.css'


function Portfolio() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Resume/>
      <Works/>
    </div>
  )
}

export default Portfolio