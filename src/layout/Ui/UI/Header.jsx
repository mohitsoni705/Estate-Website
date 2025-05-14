import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h1>ESTATE</h1>
        </div>
        <div className="nav-links">
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/project">PROJECTS</NavLink></li>
                <li><NavLink to="/testimonials">TESTMONIALS</NavLink></li>
            </ul>
        </div>
        <div className="sign-up">
            <button className='btn-signIn'><NavLink to="signup">Sign Up</NavLink></button>
        </div>
    </header>
  )
}

export default Header
