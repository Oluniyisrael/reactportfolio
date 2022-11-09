import React, { Component } from 'react'
// import scrollLink from '../../markdown/scrollButtn.json'
import "./ScrollButton.css"
// import Null

export default class ScrollButton extends Component {
    constructor(props){
      super(props)
        this.state = {
          minDisappearHeight : "100px",
          showOnPx : "101px",
          backToTop : document.querySelectorAll('.backToTop'),
          scrollContainer : () => {
            return document.documentElement || document.body;
          },
          
        };
    }
  render() {
    return (
      <div>
        <button className='backToTop hidden'> 
        {document.addEventListener("scroll", () => {
  if (this.scrollContainer().scrollTop > this.showOnPx) {
    this.backToTop.classList.remove("hidden")
  } else {
    this.backToTop.classList.add("hidden")
  }
})} back to top</button>
        <button className='scrollButton'>  </button>
      </div>
      
    )
  } 
}
