import React from 'react'
import Navbar from '../../components/portfolioNavBar/Navbar'
import Intro from '../portfolioHomePage/Intro'
import About from '../portfolioAboutPage/About'
import Resume from '../portfolioResume/Resume'
import Works from '../portfolioWorks/Works'
import ContactUs from '../portfolioContact/ContactUs'
import Footer from '../../components/portfolioFooter/Footer'
import './Portfolio.css'
// import ScrollButton from '../../components/scrollButton/ScrollButton'


function Portfolio() {
  return (
    <div>
      <Navbar/>
      {/* <ScrollButton/> */}
      <Intro/>
      <About/>
      <Resume/>
      <Works/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Portfolio