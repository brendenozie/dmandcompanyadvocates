import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logowh.png";

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
        <NavLink
          to="/"
          className="logo"
          onClick={() => setState((prevState) => ({ ...prevState, isMenuOpen: false }))}
        >
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
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "#about" },
              { name: "Services", path: "#services" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <li key={name}>
                {path.startsWith("#") ? (
                  <a
                    href={path} // Anchor link for sections
                    onClick={() => setState((prevState) => ({ ...prevState, isMenuOpen: false }))}
                  >
                    {name}
                  </a>
                ) : (
                  <NavLink
                    to={path} // NavLink for page routes
                    onClick={() => setState((prevState) => ({ ...prevState, isMenuOpen: false }))}
                    activeClassName="active" // Optional active class
                  >
                    {name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
