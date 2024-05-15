import React, { Component } from 'react'
import logo from './assets/IzzyDev.png'
import './Navbar.css'
import {Link} from  "react-scroll";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isScrolled: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll() {
        const introElement = document.getElementById('intro');
        const rect = introElement.getBoundingClientRect();
        const isScrolled = (rect.height/ 8) < Math.abs(rect.top);
        this.setState({ isScrolled });
      }
    
      render() {
        const { isScrolled } = this.state;
        const navbarClassName = isScrolled ? 'navBar bg' : 'navBar';
        return (
          <nav className={navbarClassName}>
            <div>
                <img src={logo} alt="mylogo" className='mylogo' />
            </div>
            
            <ul>
            <li>
                <Link activeClass="active" spy to="intro"> 
                    <p className='naviLinks' onClick={()=>{
                        var to = document.getElementById('intro')
                        to.scrollIntoView()
                    }}>Home
                    </p>
                </Link> 
            </li>
            <li>
                <Link activeClass="active" spy to="About"> 
                    <p className='naviLinks' onClick={()=>{
                        var to = document.getElementById('About')
                        to.scrollIntoView()
                    }}>About
                    </p>
                </Link> 
            </li>
            <li>
                <Link activeClass="active" spy to="resume"> 
                    <p className='naviLinks' onClick={()=>{
                        var to = document.getElementById('resume')
                        to.scrollIntoView()
                    }}>Resume
                    </p>
                </Link> 
            </li>
            <li>
                <Link activeClass="active" spy to="works"> 
                    <p className='naviLinks' onClick={()=>{
                        var to = document.getElementById('works')
                        to.scrollIntoView()
                    }}>Work
                    </p>
                </Link> 
            </li>
            <li>
                <Link activeClass="active" spy to="contactus"> 
                    <p className='naviLinks' onClick={()=>{
                        var to = document.getElementById('contactus')
                        to.scrollIntoView()
                    }}>Say Hello
                    </p>
                </Link> 
            </li>
            </ul>
        </nav>
    )
  }
}
