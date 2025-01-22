
import React from 'react';
import './LawBanner.css';
import heroImage from '../../assets/lawbanner.jpg'; // Replace with your hero image
import iconLitigation from '../../assets/lawbanner.jpg'; // Replace with your litigation icon
import iconStrategy from '../../assets/lawbanner.jpg'; // Replace with your strategy icon

const EnhancedLawBanner = () => {
  return (
    <section className="enhanced-law-banner">
      {/* Background */}
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="overlay-gradient"></div>

      {/* Content */}
      <div className="content-container">
        
        {/* Left Section: Feature Cards */}
        <div className="cards-section">
          <div className="card">
            <img src={iconLitigation} alt="Litigation Icon" className="card-icon" />
            <h3 className="card-title">Commercial Litigation</h3>
            <p className="card-description">
              Strategic and efficient dispute resolution for businesses of all sizes.
            </p>
          </div>
          <div className="card">
            <img src={iconStrategy} alt="Strategy Icon" className="card-icon" />
            <h3 className="card-title">Strategic Advisory</h3>
            <p className="card-description">
              Proactive legal solutions to help you achieve long-term success.
            </p>
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="text-section">
          <h1 className="heading">
            Your Trusted Legal Partners, <br /> Built for Success
          </h1>
          <p className="subheading">
            Expertly navigating your legal needs with care, integrity, and unmatched expertise. Partner with us to safeguard your future.
          </p>
          <button className="cta-button">
            Get Started <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedLawBanner;

