import React from 'react';
import './InstructorCard.css';

const InstructorCard = ({ name, classes, image }) => (
  <div className="instructor-card" style={{ backgroundImage: `url(${image})` }}>
    <div className="instructor-overlay">
      <h2 className="instructor-name">{name}</h2>
      <div className="instructor-classes">{classes}</div>
    </div>
  </div>
);

export default InstructorCard;
