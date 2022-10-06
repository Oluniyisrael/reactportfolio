import React, { Component } from 'react'
import './ContactUs.css'

export default class ContactUs extends Component {
  render() {
    return (
      <div className="helloc">
                <div className="hello">
                    <div className="hellol">
                        <span className="shello">SAY HELLO</span>
                        <p>Have a new project in mind? Let's collaborate and build something awesome. Let's turn that classNameea to an even greater product</p>
                    </div>
                    <div className="hellor">
                        <span className="Contactc">Email</span><br/>
                        <a href="mailto:israeloluniyi2004@gmail.com" className="lin">israeloluniyi2004@gmail.com</a>
                        <br/><br/>
                        <span className="Contactc">Phone</span><br/>
                        <a href="tel:+2348069902175" className="lin">+2348069902175</a> <br/><br/>
                        &nbsp;<a href="mailto:israeloluniyi2004@gmail.com" className="linkt"> LET'S TALK</a>
                    </div>
                </div>
		{/* <div className="footer">
            <hr color="rgb(77, 89, 114)">
            <p className="footnote">© Copyright Oluniyi 2022 | Developed by <a href="https://facebook.com/oluniyiozy.israel">Oluniyi Israel</a></p>
		</div> */}
      </div>
    )
  }
}
