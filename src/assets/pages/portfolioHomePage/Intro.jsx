import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import img1 from "../../images/images.png"
// import img2 from "../../images/img2.jpg"
import whatsappimg from "../../images/whatsapp icon.png" 
import down from "../../images/down.png"
import './Intro.css'

export default class Intro extends Component {
  render() {
    return (
      <div id='intro' className='introContainer'>
        <div className='intro' >
          <h1>I am Israel Oluniyi</h1>
          <h3>
              <p>I'm a <span>Front-End Developer</span>, <span>Content creator</span> and a gamer, creating awesome and effective visual identities for individuals and companies of all sizes around the world. <Link to="#About">Start scrolling</Link> and learn more <Link  to="#About">about me</Link> and <Link to="#Works">my works</Link>.
              </p> 
          </h3>

          <div className="Contact">
            
            <a href="https://facebook.com/oluniyiozy.israel" target='_blank' rel="noreferrer"><img src={img1} alt="..." height="30px" width="30px"/></a>&nbsp;
            <a href="http://wasap.my/+2349025486481" target='_blank' rel="noreferrer"><img src={whatsappimg}alt="..." height="30px" width="30px"/></a>
          </div>
                  <br/>
          <div className="scroll">
                  <Link to="/About"><img src={down} alt="..." height="25px" width="25px" id="down"/> Scroll down</Link> 
          </div>
        </div>
      </div>
    )
  }
}
