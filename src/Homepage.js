import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import images from './Assets/bg.jpg'

const Homepage = () => {
  const [image,setImage] = useState(false)
  return (
    <div className='heading'>
      <Link to="/class5/days">
      <button className='button1'> Class 1 - 5  </button>
      </Link>
      <Link to="/class6/days">   
          <button className='button1'> Class 6 - 8 </button>
      </Link>
      <button className='button1' onClick={()=> setImage(true)}>View Rate</button>
      {image ? <img src={images} alt='any'/> : ""}
      
      </div>
  )
}

export default Homepage