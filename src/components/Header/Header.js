import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from "../../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import throttle from "lodash.throttle";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 100);
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const toggleMobileNav = () => setMobileOpen(!mobileOpen);
  const closeMobileNav = () => setMobileOpen(false);

  return (
    <header className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={closeMobileNav}>
          <img src={logo} alt="Law Firm Logo" />
        </NavLink>
        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <li><NavLink to="/" onClick={closeMobileNav}>Home</NavLink></li>
          <li><NavLink to="/#about" onClick={closeMobileNav}>About</NavLink></li>
          <li><NavLink to="/#services" onClick={closeMobileNav}>Services</NavLink></li>
          <li><NavLink to="/#contact" onClick={closeMobileNav}>Contact</NavLink></li>
        </ul>
        <button className="cta-button" onClick={closeMobileNav}>
          Get In Touch
        </button>
        <div className="hamburger-menu" onClick={toggleMobileNav}>
          <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
