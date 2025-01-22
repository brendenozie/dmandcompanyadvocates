import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [state, setState] = useState({
    isMenuOpen: false,
    isMobileView: window.innerWidth <= 1024,
  });

  const toggleMenu = () => {
    setState((prevState) => ({ ...prevState, isMenuOpen: !prevState.isMenuOpen }));
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1024;
      setState((prevState) => ({ ...prevState, isMobileView: isMobile }));
      if (!isMobile) setState((prevState) => ({ ...prevState, isMenuOpen: false }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={() => setState((prevState) => ({ ...prevState, isMenuOpen: false }))}>
          <img src={logo} alt="Logo" />
        </NavLink>
        <button
          className={`hamburger ${state.isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={state.isMenuOpen}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>
        <nav className={`nav-links-container ${state.isMenuOpen || !state.isMobileView ? "show" : ""}`}>
          <ul className="nav-links">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <li key={link}>
                <NavLink to={`/${link.toLowerCase()}`} onClick={() => setState((prevState) => ({ ...prevState, isMenuOpen: false }))}>
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
