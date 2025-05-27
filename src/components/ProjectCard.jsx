import React from 'react';
import './ProjectCard.css'; // Import the CSS file
const ProjectCard = ({ title, price, place, productImage }) => {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={productImage} alt={title} className="image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <div className="card-details">
            <p className="card-price">${price}</p>
            <span className="card-separator">|</span>
            <p className="card-location">{place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
