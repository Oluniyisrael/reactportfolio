import React, { Component } from 'react'
import './Resume.css'

export default class Resume extends Component {
  render() {
    return (
        <div className='resumeContaienr'>
            <div className="Resume">
                <div className="flexleft">
                    <h3>Career</h3>
                </div>
                <div className="flexright">
                    <h2>
                        High Grace International School
                    </h2>
                    <p><strong>Computer Teacher  |</strong><i><span> January 6, 2022.</span></i></p>
                    <p>
                        Beginning of an exciting career in teaching. Meeting new people and collobarating with a great team of employees. <br/>Working on grooming children together and helping each other grow. Quite excited to begin a career in Sterling
                    </p>
                    <hr/>
                    <p><strong> Online Game Topper |</strong><i><span> September 11, 2021.</span></i></p>
                    <p>I started a Business with an Online game called Free Fire. I convert real curency to game currency for a small fee.</p>
                </div>
            </div>
            <div className="Resume2">
                <div className="l2">
                        <h3>Education</h3>
                </div>
                <div className="r2">
                    <h2>Ivory Tower Model School, Masaka, Nasarawa.</h2>
                    <p><strong>Senior School Certificate Examination  |</strong><i><span> June 6th, 2019-May 15th, 2021</span></i></p>
                </div>
            </div>
            <div className="Skills">
                <div className="SIntro">
                    <h3>Skills</h3>
                </div>
                <div className="Skillsbar">
                    <h4>HTML</h4>
                    <div className="htmlbar">
                        <div className="htmlb"></div>
                    </div>
                    <h4>CSS</h4>
                    <div className="cssbar">
                        <div className="cssb"></div>
                    </div>
                    <h4>JAVASCRIPT</h4>
                    <div className="jscriptbar">
                        <div className="jscriptb"></div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
  }
}
