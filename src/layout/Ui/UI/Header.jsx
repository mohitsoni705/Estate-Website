import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navright from './Navright';
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
    const [toggle,setToggle]=useState(false)
    const handleToggleChange=()=>{
       setToggle(!toggle)
    }
    const closeMobileMenu=()=>{
      setToggle(false)
    }
  return (
    <header>
        <div className="logo">
            <NavLink to="/"><h1>ESTATE</h1></NavLink>
        </div>
        <nav className='nav-links'>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/project">PROJECTS</NavLink></li>
                <li><NavLink to="/testimonials">TESTMONIALS</NavLink></li>
            </ul>
        </nav>

        <div className="sign-up">
            <button className='btn-signIn'><NavLink to="signup">Sign Up</NavLink></button>
        </div>

        <div className='hamburger-icon'>
           <GiHamburgerMenu onClick={handleToggleChange}/>
        </div>

        {toggle && (
        <div className="mobile-menu">
          <Navright closeMenu={closeMobileMenu} />
        </div>
      )}
    </header>
  )
}

export default Header
