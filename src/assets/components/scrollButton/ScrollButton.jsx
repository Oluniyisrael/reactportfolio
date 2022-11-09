import React, { Component } from 'react'
// import scrollLink from '../../markdown/scrollButtn.json'
import "./ScrollButton.css"
// import Null

export default class ScrollButton extends Component {
    constructor(){
      super();
        this.state = {
          minDisappearHeight : "100px",
          showOnPx : "101px",
          backToTop : document.querySelectorAll('.backToTop'),
          g : ()=> {this.scrollFunction()},
          scrollFunction :()=> {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                this.backToTop.style.display = "block";
            } else {
                this.backToTop.style.display = "none";
                }
            }
          
        };
    }
  render() {
    return (
      <div>
        <button className='backToTop hidden' onScroll={this.g}> Back to top</button>
        <button className='scrollButton'> Back to top </button>
      </div>
      
    )
  } 
}
