import React, { Component } from 'react'
// import img2 from "../../images/img2.jpg"
import { SocialIcon } from 'react-social-icons'
// import down from "../../images/down.png"
import './Intro.css'

export default class Intro extends Component {
  render() {
    return (
      <div id='intro' className='introContainer'>
        <div className='intro' >
          <h1>I am Israel Oluniyi</h1>
          <h3>
              <p>I am currently a <span>Fullstack Developer</span>, <span>Content creator</span> and a gamer, creating awesome and effective visual identities for individuals and companies of all sizes around the world. <a href="#About">Start scrolling</a> and learn more <a  href="#About">about me</a> and <a href="#works">my works</a>.
              </p> 
          </h3>

          <div className="Contact"> 
            <SocialIcon url="http://wasap.my/+2349025486481" network='whatsapp' className='sicons'/>
            <SocialIcon url="https://facebook.com/oluniyiozy.israel"  className='sicons'/>
            <SocialIcon url="https://github.com/Oluniyisrael"  className='sicons'/>
            <SocialIcon url="mailto:israeloluniyi2004@gmail.com"  network="email"className='sicons'/>
            
            
          </div>
                  <br/>
        </div>
      </div>
    )
  }
}
