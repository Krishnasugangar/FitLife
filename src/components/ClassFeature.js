import React from 'react';
import './ClassFeature.css';

const ClassFeature = () => (
  <section className="class-feature">
    <div className="feature-image">
      <img
        src="/cardio.jpg"
        alt="Cardio Class"
      />
    </div>
    <div className="feature-info">
      <h2>CARDIO</h2>
      <p>
        <span className="feature-instructor-label">TAUGHT BY </span>
        <a href="#">ALIYAH WILLIAMS</a>
      </p>
      <button className="book-class-btn">BOOK A CLASS</button>
    </div>
  </section>
);

export default ClassFeature;
