import React from 'react'
import { NavLink } from 'react-router-dom'

const Navright = () => {
  return (
    <>
       <div className="right-links">
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
              </>
  )
}

export default Navright
