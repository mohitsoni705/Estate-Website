import React from 'react'
import TestimonialsCards from "../api/TestimonialsCards.json"
const Testimonials = () => {
  return (
    <div className="container-form">
      <div className="about">
        <div className='flex-row'>
        <h1>Customer</h1>
        <p className='underline'>Testimonials</p>
        </div>
        <div>
        <p className='about-para'>Real Stories from Those Who Found Home with Us</p>
        </div>
      </div>
      {/* Customer Section */}
      <div className="testimonials">

      </div>
    </div>
  )
}

export default Testimonials
