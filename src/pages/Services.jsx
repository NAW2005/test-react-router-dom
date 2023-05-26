import React from 'react'
import "../pages/page.css"
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Services = () => {
  const nav = useNavigate()
  const location = useLocation()
  console.log(location)

  const handleClick = () => {
    nav("/")
  }
  return (
    <div className='container'>
      <div>
        <h1>Service</h1>
        <p>{location.state?.value}</p>
        <button onClick={handleClick}>Go to back Home page</button>
      </div>
    </div>
  )
}

export default Services