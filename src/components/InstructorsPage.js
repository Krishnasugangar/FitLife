import React from 'react';
import './InstructorsPage.css';

const instructors = [
  {
    name: "NICOLE WINTER",
    classes: "YOGA",
    image: "/nicole-winter.jpg"
  },
  {
    name: "AARON HUGHES",
    classes: "STRENGTH TRAINING, BOXING",
    image: "/aaron-hughes.jpg"
  },
  {
    name: "DERRICK SAWYERS",
    classes: "CARDIO, CORE",
    image: "/derrick-sawyers.jpg"
  }
];

const InstructorsPage = () => (
  <section className="instructors-grid">
    {instructors.map(({ name, classes, image }) => (
      <div key={name} className="instructor-card" style={{ backgroundImage: `url(${image})` }}>
        <div className="overlay">
          <h2>{name}</h2>
          <p>{classes}</p>
        </div>
      </div>
    ))}
  </section>
);

export default InstructorsPage;
