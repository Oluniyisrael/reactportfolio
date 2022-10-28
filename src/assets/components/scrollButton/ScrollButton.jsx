import React, { Component } from 'react'
import scrollLink from '../../markdown/scrollButtn.json'
import "./ScrollButton.css"
// import Null

export default class ScrollButton extends Component {
    constructor(){
      super()
    }
  render() {
    return (
      <div className='ScrollButton' onClick={() => {
        for (let i = 0; i < scrollLink.length; i++){
        console.log(scrollLink.i)
        }
      }
    }
      >
        <img src={null} alt="..." />
        <h3 className='arrowfooter'> Scroll to top</h3>
        <h3 className='arrowfooter2'>Scroll to bottom</h3>
      </div>
    )
  }
}
