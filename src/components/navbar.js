import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Make sure to include the Bootstrap JS file
import './navbar.css';
import { Main } from './Main/Main';
import '../components/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevents the default navigation behavior
    setActive(true);
    setMenuOpen(false);
  };

  return (
    <div className='nav-bar'>
      <nav className="navbar navbar-expand-sm navbar-white" style={{ background: "white", borderBottom:"2px solid  rgb(223, 221, 221)", maxHeight: isMenuOpen ? "none" : "54px" }}>
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <i className="bi bi-currency-exchange fs-1 text-warning"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
    <li className="nav-item">
      <a
        href="/dashboard"
        className={`nav-link btn me-5 ${isActive ? 'active' : ''}`}
        style={{
          fontWeight: 'bolder',
          fontSize: '25px',
          marginTop: '12px',
          color: 'black',
          opacity: isActive ? '1.2' : '0.6', 
          textDecoration: 'none',
          border: 'none',
        }}
        onClick={handleLinkClick}
      >
        Authorization
      </a>
    </li>
  </ul>
</div>

        </div>
      </nav>
      <Main />
    </div>
  );
};

export default Navbar;


