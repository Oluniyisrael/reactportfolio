import React, { Component } from 'react'
import './Works.css'
import wimg1 from '../../images/robofriends.png'
import wimg2 from '../../images/topmost.png'
import wimg3 from '../../images/esdermablog.png'

export default class Works extends Component {
  render() {
    return (
      <div className="Works" id='works'>
                <div className="WIntro">
                    <h2> A few of my works</h2>
                </div>
                <div className="wimg">
                    <div className="wimg1"> <a href="https://izzyrobofriends.netlify.app/"><img src={wimg1} alt="..." width="300px" height="200px"/> </a><p>Robofriends</p> </div>
                    <div className="wimg2"> <a href="https://topmostintc.netlify.app/"><img src={wimg2} alt="..." width="300px" height="200px"/></a> <p>Topmost International School</p></div>
                    <div className="wimg3">  <a href="https://esdermablog.netlify.app/"><img src={wimg3} alt="..." width="300px" height="200px"/></a>
                    <p>Esderma Blog</p></div>
                </div>
                <hr width="60%" align="center"/>
                <h2 className="needhelp">Need a place to learn a skill in tech?</h2>
                   <p className="needhelpc">I highly recommend <a href="https://mobile.facebook.com/BlueHouseTechnologies/" className="needhelplink"> BlueHouse Technologies</a>.
                     BlueHouse has a team of skilled and certified experts and is offering to help anyone who would like to start a career in tech. Guaranteed.</p>
                     <br/><br/>
                     
                        <a href="https://www.bluehouseng.com/" className="conblue"> CONTACT BLUEHOUSE</a>
                     

      </div>
    )
  }
}
