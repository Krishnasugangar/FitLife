import React from 'react';
import { FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const amenities = {
  support: [
    { label: 'Terms and Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'FAQs', href: '#' }
  ],
  contact: [
    { label: 'krishnasugangar7@gmail.com' },
    { label: '91+ 9353970266' }
  ],
  socialIcons: [
    { icon: <FaInstagram />, href: 'https://www.instagram.com/krishna_sugangar/' },
    { icon: <FaYoutube />, href: '#' },
    { icon: <FaFacebookF />, href: '#' }
  ]
};

const Footer = () => {
  return (
    <>
      <section className="newsletter-section">
        <h2 className="newsletter-title">STAY UPDATED</h2>
        <p className="newsletter-desc">
          Sign up to be the first to find out when we add new classes, amenities, and more.<br />
          We respect your privacy and will never share your information with any third-party vendors.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Email Address" />
          <button type="submit">SIGN UP</button>
        </form>
      </section>
      <footer className="footer">
        <div className="footer-col support">
          <div className="footer-heading">SUPPORT</div>
          {amenities.support.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
        <div className="footer-col contact">
          <div className="footer-heading">CONTACT</div>
          {amenities.contact.map(({ label }) => (
            <div key={label}>{label}</div>
          ))}
        </div>
        <div className="footer-col sitetitle">
          <div className="footer-title">FitLife</div>
          <div className="footer-icons">
            {amenities.socialIcons.map(({ icon, href }, idx) => (
              <a key={idx} href={href} style={{ color: 'inherit' }}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
