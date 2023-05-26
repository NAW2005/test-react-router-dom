import React, { useRef } from 'react'
import "../pages/page.css"
import { useSearchParams } from 'react-router-dom'

const About = () => {

    const [query, setQuery] = useSearchParams()
    console.log(query)

    const ref = useRef()


    const handleClick = (e) => {
        e.preventDefault()
        setQuery({ name: ref.current[0].value, age: ref.current[1].value })
    }

    const handleGet = () => {
        console.log(query.get("name"), query.get("age"))
    }

    return (
        <div className='container'>
            <form ref={ref}>
                <input type="text" name='name' />
                <input type="number" name='age' />
                <button onClick={handleClick}>click</button>
            </form>
            <button onClick={handleGet}>Get</button>
        </div>
    )
}

export default About