import React from 'react'
import { NavLink } from 'react-router-dom'

const Navright = ({setToggle}) => {
  const handleToggleBtn=()=>{
    setToggle(!toggle)
  }
  return (
    <>
    <div className="right-links">
                  <ul>
                      <li><NavLink to="/" onClick={handleToggleBtn}>HOME</NavLink></li>
                      <li><NavLink to="/about" onClick={handleToggleBtn}>ABOUT</NavLink></li>
                      <li><NavLink to="/project" onClick={handleToggleBtn}>PROJECTS</NavLink></li>
                      <li><NavLink to="/testimonials" onClick={handleToggleBtn}>TESTMONIALS</NavLink></li>
                      <li><NavLink to="signup" onClick={handleToggleBtn}>Sign Up</NavLink></li>
                  </ul>
              </div>
              </>
  )
}

export default Navright
