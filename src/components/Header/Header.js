import React, { useState } from 'react';
import './Header.css';
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to show or hide menu items
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="top-banner">
        Get appointments in as little as 2 days! Start your free assessment today.
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom navbar-light align-items-center justify-content-center">
        <div className="container-fluid d-flex flex-row">
          {/* Left Side Navbar Links */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} order-1 order-lg-0`} id="navbarNavLeft">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#getting-started">Getting Started</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#learn-more">Learn More</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
            </ul>
          </div>

          {/* Centered Logo */}
          <a className="navbar-brand mx-auto order-0" href="/">
            <div className="logo-container">
              <img
                src={logo}
                alt="Logo"
                className="logo"
              />
            </div>
          </a>

          {/* Right Side Navbar Links */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : 'align-items-end justify-content-end'} order-3 order-lg-2`} id="navbarNavRight">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#refer-patient">Refer a Patient</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#login">Member Login</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-assessmnt" href="#assessment">FREE Assessment</a>
              </li>
            </ul>
          </div>

          {/* Navbar Toggler */}
          <button className="navbar-toggler" type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavLeft #navbarNavRight" 
            aria-controls="navbarNavLeft navbarNavRight" 
            onClick={toggleNavbar}
            aria-expanded={isOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
