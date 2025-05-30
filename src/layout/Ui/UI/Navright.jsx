import React from 'react'
import { NavLink } from 'react-router-dom'

const Navright = ({closeMenu}) => {
  return (
    <>
    <div className="right-links">
                  <ul>
                      <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
                      <li><NavLink to="/about" onClick={closeMenu}>ABOUT</NavLink></li>
                      <li><NavLink to="/project" onClick={closeMenu}>PROJECTS</NavLink></li>
                      <li><NavLink to="/testimonials" onClick={closeMenu}>TESTMONIALS</NavLink></li>
                      <li><NavLink to="sign-up" onClick={closeMenu}>Sign Up</NavLink></li>
                  </ul>
              </div>
              </>
  )
}

export default Navright
