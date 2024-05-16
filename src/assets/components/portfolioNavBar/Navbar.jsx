import React, { Component } from 'react';
import logo from './assets/IzzyDev.png';
import './Navbar.css';
import { Link } from 'react-scroll';
import SideBar from './assets/sideBar/SideBar';

export default class Navbar extends Component {
  state = {
    isScrolled: false,
    sideBar: false,
  };

  handleScroll = () => {
    const introElement = document.getElementById('intro');
    const rect = introElement.getBoundingClientRect();
    const isScrolled = (rect.height / 8) < Math.abs(rect.top);
    this.setState({ isScrolled });
  };

  handleClick = () => {
    this.setState({ sideBar: !this.state.sideBar });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { isScrolled, sideBar } = this.state;
    const navbarClassName = isScrolled ? `navBar bg` : `navBar`;
    const hamburgerClass = sideBar ? `sideBar` : '';
    // eslint-disable-next-line 
    const hamburgerIcon = sideBar ? 'sidebar normal' : 'sidebar'

    return (
      <nav className={navbarClassName}>
        <SideBar  
        navbarClassName= {hamburgerIcon}/>

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
        <div id="hamburgerDiv" >
          <input type="button" className={hamburgerClass} value="☰" id="hamburger" onClick={this.handleClick} />
        </div>
        <nav>
        </nav>
      </nav>
    );
  }
}