import React, { Component } from 'react'
import './Works.css'
import wimg1 from '../../images/Web capture_14-6-2022_142827_.jpeg'
import wimg2 from '../../images/Web capture_14-6-2022_143348_.jpeg'
import wimg3 from '../../images/Web capture_14-6-2022_143549_.jpeg'

export default class Works extends Component {
  render() {
    return (
      <div className="Works">
                <div className="WIntro">
                    <h2> A few of my works</h2>
                </div>
                <div className="wimg">
                    <div className="wimg1"> <img src={wimg1} alt="..." width="300px" height="200px"/></div>
                    <div className="wimg2"> <img src={wimg2} alt="..." width="300px" height="200px"/></div>
                    <div className="wimg3"> <img src={wimg3} alt="..." width="300px" height="200px"/></div>
                </div>
                <hr wclassNameth="60%" align="center"/>
                <h2 className="needhelp">Need a place to learn a skill in tech?</h2>
                   <p className="needhelpc">I highly recommend <a href="https://mobile.facebook.com/BlueHouseTechnologies/" className="needhelplink"> BlueHouse Technologies</a>.
                     BlueHouse has a team of skilled and certified experts and is offering to help anyone who would like to start a career in tech. Guaranteed.</p>
                     <br/><br/>
                     
                        <a href="https://www.bluehouseng.com/" className="conblue"> CONTACT BLUEHOUSE</a>
                     

      </div>
    )
  }
}
