import React from 'react'
import StarRating from './StarRating'
const TestimonialCard = ({ image, name, ratings, rivew, post }) => {
  return (
    <div className='testimonial-card'>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{post}</p>
      <StarRating rating={ratings} />
      <p>{rivew}</p>
    </div>
  )
}

export default TestimonialCard
