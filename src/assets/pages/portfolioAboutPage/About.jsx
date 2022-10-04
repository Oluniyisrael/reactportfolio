import React, { Component } from 'react'
import Me from '../../images/IMG_20220614_104755_287.jpg'

export default class About extends Component {
  render() {
    return (
        <section className="about" id="About">
            <div id="Aboutme">
                <img src={Me} alt="..." height="250px" width="250px"/> 
            </div>
            <div id="Aboutmecontents">
                <h3>About Me</h3>
                <p id="About-mecontents">
                    Hi, My name is Israel Oluniyi, I am the CEO of Nexus Technology, a tech company in Nigeria. I am a self taught
                    front-end developer. Aside fullstack development, I have an interest in Artificial Intelligence (AI) with a particular 
                    focus on Machine Learning, Deep Learning, Automation, Robotics and Data Science.  
                    At a personal level, I am a man of few words with a reserved, dedicated, and open-minded personality. 
                    I like to mind my business in all the things I do. I believe that a person should work on developing themselves 
                    with professional skills by learning new things all the time.
                    This has been my guiding principle and philosophy through the years.
                </p>
                <hr/>
           <div>
               <br/><br/><br/><br/><br/><br/>
               <h3>Contact Details</h3>
                       <p>
                           Oluniyi Israel <br/>
                           Nasarawa, Nigeria <br/>
                           <a href="tel:+2348069902175" id="abmel">+2348069902175</a> <br/>
                           <a href="mailto:israeloluniyi2004@gmail.com" id="abmel">israeloluniyi2004@gmail.com</a>
                       </p>
                    
           </div>
           <div id="CV">
               <a href="#" download>
                   Download CV
               </a>
           </div>
       </div>
   </section>
    )
  }
}
