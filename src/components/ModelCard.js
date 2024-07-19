import React from 'react';
// import './ModelCard.css';

const ModelCard = ({ title, imgSrc, link }) => {
  return (
    <div className="model-card">
      <img src={imgSrc} alt={title} className="model-card-image" />
      <h3>{title}</h3>
      <a href={link} className="model-card-button">Try Now</a>
    </div>
  );
};

export default ModelCard;
