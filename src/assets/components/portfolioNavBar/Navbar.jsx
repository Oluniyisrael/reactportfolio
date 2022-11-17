import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    state={
        pageHeight : window.innerHeight
    }
  render() {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <a href="#intro"><p>Home</p></a>
                </li>
                <li>
                    <a href="#About"><p>About</p></a>
                </li>
                <li>
                    <a href="#resume"><p>Resume</p></a>
                </li>
                <li>
                    <a href="#works"><p>Work</p></a>
                </li>
                <li>
                    <a href="#contactus"><p>Say Hello</p> </a>
                </li>
                <li> {this.state.pageHeight}</li>
            </ul>
        </nav>
    )
  }
}
