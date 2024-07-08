import React, { Component } from 'react'
import './Works.css'
import Excursions from '../../components/owlCarousel/OwlCarousel'

export default class Works extends Component {
  render() {
    return (
      <div className="Works" id='works'>
                <div className="WIntro">
                    <h2> A few of my works</h2>
                </div>
                <Excursions/>
  
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
