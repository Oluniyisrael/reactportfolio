import React
// ,{useState, useEffect}
 from 'react'
import "./ScrollButton.css"

function ScrollButton() {
  // const [backToTop, setBackToTop] =useState(false);
  // const [scrollHeightV,setScrollHeightV]=useState('')
  const top = ()=>{ window.scrollTo(0,0)};
  // var scrollHeightV = window.scrollY;
  // var scrollDist = ;
  // var mean = scrollHeightV;
  // window.addEventListener("scroll",()=>{
  //   setScrollHeightV(window.document.body.scrollHeight)
  //   console.log(mean)
  //   if(window.scrollY > 3200){
  //     setBackToTop (true)
  //   }
  //   else {setBackToTop(false)
  //   }
  // 
  // })

  // useEffect(()=>{
  //   window.addEventListener("scroll",()=>{
  //     if (window.scrollY > 3200) {
  //       setBackToTop(true)
  //     }
  //     else {
  //       setBackToTop(false)
  //     }
  //   })
  // },[]);
  return (
    <div>
      {/* {backToTop &&  */}
      <button className='scrollButton' onClick={top}>Back to top</button>
      {/* } */}
      
    </div>
  )
}

export default ScrollButton