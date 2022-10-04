import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <Link to="/"><p>Home</p></Link>
                </li>
                <li>
                    <Link to="/About"><p>About</p></Link>
                </li>
                <li>
                    <Link to="/Resume"><p>Resume</p></Link>
                </li>
                <li>
                    <Link to="/Works"><p>Work</p></Link>
                </li>
                <li>
                    <Link to="/Hello"><p>Say Hello</p> </Link>
                </li>
            </ul>
        </nav>
    )
  }
}
