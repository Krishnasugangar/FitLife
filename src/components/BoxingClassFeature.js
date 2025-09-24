import React from 'react';
import './BoxingClassFeature.css';

const BoxingClassFeature = () => (
  <section className="boxing-feature">
    <div className="boxing-info">
      <h2 className="class-title">BOXING</h2>
      <p className="instructor">
        TAUGHT BY AARON HUGHES AND TESHIA MILLER
      </p>
      <p className="timing">TUESDAY:  2PM-3PM</p>
      <p className="timing">THURSDAY:  2PM-3PM</p>
      <br/>
      <p className="class-desc">
        It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
      </p>
      <button className="book-btn">BOOK A CLASS</button>
    </div>
    <div className="boxing-image">
      <img src="/boxing.jpg" alt="Boxing Class" />
    </div>
  </section>
);

export default BoxingClassFeature;
