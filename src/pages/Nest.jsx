import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nest = () => {
    return (
        <div style={{ display: 'flex' }}>
            <ul>
                <li>
                    <Link to={"/nest/one"}>One</Link>
                </li>
                <li>
                    <Link to={"/nest/two"}>Two</Link>
                </li>
                <li>
                    <Link to={"/nest/three"}>Three</Link>
                </li>
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Nest