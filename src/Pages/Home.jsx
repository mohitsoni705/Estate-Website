import React from 'react'
import Header from '../layout/Ui/UI/Header'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
        <div className="hero">
        <div className="para">
            <p>Explore homes that fit your dreams</p>
        </div>
        <div className="two-box">
            <div className="box1">
                <NavLink to="/project">
                <button className="btn-1">
                    Projects
                </button>
                </NavLink>
            </div>
            <div className="box2">
                    <NavLink to="/contactForm">
               <button className="btn-2">
                    Contact Us
                </button>
                    </NavLink>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home
