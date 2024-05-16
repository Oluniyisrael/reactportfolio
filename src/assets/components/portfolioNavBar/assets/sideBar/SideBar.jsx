import React from 'react';
import logo from './assets/IzzyDev.png';
import './Navbar.css';
import { Link } from 'react-scroll';
import "./SideBar.css"

function SideBar() {
  return (
      <nav className={navbarClassName}>
        <div>
          <img src={logo} alt="mylogo" className="mylogo" />
        </div>
        <ul>
          <li>
            <Link activeClass="active" spy to="intro">
              <p className="naviLinks">Home</p>
            </Link>
          </li>
          <li>
            <Link activeClass="active" spy to="About">
              <p className="naviLinks">About</p>
            </Link>
          </li>
          <li>
            <Link activeClass="active" spy to="resume">
              <p className="naviLinks">Resume</p>
            </Link>
          </li>
          <li>
            <Link activeClass="active" spy to="works">
              <p className="naviLinks">Work</p>
            </Link>
          </li>
          <li>
            <Link activeClass="active" spy to="contactus">
              <p className="naviLinks">Say Hello</p>
            </Link>
          </li>
        </ul>
        <div id="hamburgerDiv" className={hamburgerClass}>
          <input type="button" value="☰" id="hamburger" onClick={this.handleClick} />
        </div>
        <nav>
        </nav>
      </nav>
    );
}

export default SideBar
