import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from '@fortawesome/free-solid-svg-icons'

const StarRating = ({ rating, totalStars = 5 }) => {
  const stars = []

  for (let i = 1; i <= totalStars; i++) {
    if (rating >= i) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} color="#ffc107" />)
    } else if (rating >= i - 0.5) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} color="#ffc107" />)
    } else {
      stars.push(<FontAwesomeIcon icon={faStarEmpty} key={i} color="#e4e5e9" />)
    }
  }

  return <div style={{ display: 'flex', gap: '5px' }}>{stars}</div>
}

export default StarRating
