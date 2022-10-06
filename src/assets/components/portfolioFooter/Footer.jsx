import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
            <hr color="rgb(77, 89, 114)"/>
            <p className="footnote">© Copyright Oluniyi 2022 | Developed by <a href="https://facebook.com/oluniyiozy.israel" target='_blank' rel="noreferrer">Oluniyi Israel</a></p>
        </div>
      </div>
    )
  }
}
