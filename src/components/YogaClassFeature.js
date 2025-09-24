import React from 'react';
import './YogaClassFeature.css';

const YogaClassFeature = () => (
  <section className="class-feature">
    <div className="feature-image">
      <img
        src="/yoga.jpg"
        alt="Yoga Class"
      />
    </div>
    <div className="feature-info">
      <h2>YOGA</h2>
      <div className="feature-instructors">
        TAUGHT BY{' '}
        <a href="https://example.com/instructors/nicole-winter" target="_blank" rel="noopener noreferrer">
          NICOLE WINTER
        </a>{' '}
        AND{' '}
        <a href="https://example.com/instructors/omar-harris" target="_blank" rel="noopener noreferrer">
          OMAR HARRIS
        </a>
      </div>
      <div className="feature-timings">
        TUESDAY:  2PM-3PM<br />
        THURSDAY:  2PM-3PM
      </div>
      <p className="feature-desc">
        It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
      </p>
      <button className="book-class-btn">BOOK A CLASS</button>
    </div>
  </section>
);

export default YogaClassFeature;
