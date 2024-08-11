// src/components/Card.js
import React from 'react';

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-r from-orange-300 to-blue-400 rounded-lg p-6 m-2 shadow-lg">
      <div className="text-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12 mx-auto" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Card;
