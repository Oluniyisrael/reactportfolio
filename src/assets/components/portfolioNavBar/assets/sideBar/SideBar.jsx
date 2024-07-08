import React from 'react';
import { Link } from 'react-scroll';
import "./SideBar.css"

function SideBar(props) {
  return (
      <nav className={props.navbarClassName}>
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
      </nav>
    );
}

export default SideBar
