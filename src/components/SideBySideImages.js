import React from 'react';
import './SideBySideImages.css';

const SideBySideImages = () => (
  <section className="images-section">
    <img src="/photo-left.jpg" alt="Gym Person Left" className="side-img"/>
    <img src="/photo-right.jpg" alt="Gym Person Right" className="side-img"/>
  </section>
);

export default SideBySideImages;
