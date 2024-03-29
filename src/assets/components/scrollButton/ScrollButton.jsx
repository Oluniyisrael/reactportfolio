import React,{useState, useEffect}
 from 'react'
import "./ScrollButton.css"

function ScrollButton() {
  const [backToTop, setBackToTop] =useState(false);
  const top = ()=>{ window.scrollTo(0,0)};
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight -100 ){
        setBackToTop(true)
      }
      else{
        setBackToTop(false)
      }
    }) 
  }, [])
  return (
    <div>
      {backToTop && 
      <button className='scrollButton' onClick={top}>↑</button>
       } 
      
    </div>
  )
}

export default ScrollButton