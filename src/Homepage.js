import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import images from './Assets/bg.jpg'
import Footer from './Footer';
const Homepage = () => {
  const [image,setImage] = useState(false)
  return (
    <div className='heading'>
    {image ? <img className='img' src={images} alt='any'/> : 
    <div>
      <Link to="/class5/days">
        <button className='button1'> Class 1 - 5  </button>
      </Link>
      <Link to="/class6/days">   
          <button className='button1'> Class 6 - 8 </button>
      </Link>
     </div>}
      <button className='button1' onClick={()=> setImage(!image)}>{image ? "Hide Rate" : "View Rate"}</button>
      <Footer/>
      </div>
  )
}

export default Homepage