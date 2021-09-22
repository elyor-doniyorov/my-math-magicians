import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="container header">
      <h1 className="brand-name">Math Magicians</h1>
      <nav>
        <NavLink to="/" className="nav-link home-btn">Home</NavLink>
        <NavLink to="/calculator" className="nav-link">Calculator</NavLink>
        <NavLink to="/quote" className="nav-link">Quote</NavLink>
      </nav>
    </div>
  );
}

export default Header;
