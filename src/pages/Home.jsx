import React, { useRef } from 'react'
import "../pages/page.css"
import { useNavigate } from "react-router-dom"




const Home = () => {
  const nav = useNavigate()

  const handleClick = () => {
    console.log(ref.current.value);
    nav("/service", { state: { text: ref.current.value } })
  }

  const ref = useRef()

  return (
    <div className='container'>
      <div>
        <h1>Home</h1>
        <input ref={ref} type="text" />
        <button onClick={handleClick}>click</button>
      </div>
    </div>
  )
}

export default Home