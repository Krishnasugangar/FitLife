import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="site-title">FitLife</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
      <div className="navbar-right">
        <button className="join-btn" onClick={() => navigate('/join')}>
          JOIN OUR GYM
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
