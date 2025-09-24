import React from 'react';
import './AmenitiesSection.css';

const amenitiesLeft = [
  "Modern Facilities",
  "Premium Classes",
  "Personal Trainers",
  "Rockwall",
  "Boxing Ring"
];

const amenitiesRight = [
  "Juice Bar",
  "Personal Nutritiousness",
  "Monthly Guest Passes",
  "Basketball Courts",
  "Lockers"
];

const AmenitiesSection = () => (
  <section className="amenities-section">
    <h2 className="amenities-title">AMENITIES</h2>
    <p className="amenities-description">
      At Klipsan Fitness, we’re always expanding our amenities to meet the needs of our community. Something you’d like to see added to our list? Submit a request.
    </p>
    <div className="amenities-lists">
      <ul>
        {amenitiesLeft.map(item => <li key={item}>{item}</li>)}
      </ul>
      <ul>
        {amenitiesRight.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  </section>
);

export default AmenitiesSection;
