import React, { Component } from 'react'
// import scrollLink from '../../markdown/scrollButtn.json'
import "./ScrollButton.css"
// import Null

export default class ScrollButton extends Component {
    constructor(){
      super();
        this.state = {
        visible: window.pageYOffset,
        g: ()=>{
            console.log('All goo here')
        }

        };
    }
    
  render() {
    
    return (
      <div onClick={this.state.g}>
        <button className='scrollButton'> Back to top </button>
      </div>
      
    )
  } 
}
