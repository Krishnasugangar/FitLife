import React from 'react';
import heroImage from '../assets/hero.jpg'; // adjust path if needed

const Hero = () => {
  const heroStyle = {
    height: '100vh',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '60px',
  };

  const textStyle = {
    fontSize: '3rem',
    fontWeight: '900',
    marginLeft: '30px',
    marginBottom: '50px',
    fontFamily: "'Montserrat', Arial, sans-serif",
    letterSpacing: '2px',
  };

  return <div style={heroStyle}><div style={textStyle}>TRAIN ON YOUR OWN TIME.</div></div>;
};

export default Hero;
