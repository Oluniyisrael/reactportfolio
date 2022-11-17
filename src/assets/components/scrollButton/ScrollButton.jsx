import React, { Component } from 'react'
// import scrollLink from '../../markdown/scrollButtn.json'
import "./ScrollButton.css"
// import Null

export default class ScrollButton extends Component {
    constructor(){
      super();
        this.state = {
        visible: window.pageYOffset,
        myButton : ()=>{document.querySelectorAll(".scrollButton")},
        window: ()=>{document.querySelectorAll("document")},
        g: ()=>{
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            this.state.myButton.style.display = "block";
          } else {
            this.state.myButton.display = "none";
          }
        }

        };
    }
    
  render() {
    // {this.state.g()}
    return (
        <button className='scrollButton'> Back to top </button>
      
    )
  } 
}
