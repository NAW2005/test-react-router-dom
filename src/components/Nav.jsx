import React from 'react'
import "../components/nav.css"
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navContainer'>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/service"}>Service</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={"/nest"}>Nest</NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Nav