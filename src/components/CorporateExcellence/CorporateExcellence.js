// App.js
import React from "react";
import "./CorporateExcellence.css";

const CorporateExcellence = () => {
  return (
    <div className="corporate-container">
      {/* Top Banner */}
      <div className="banner">
        <h1>Corporate Excellence</h1>
        <div className="carousel">
          <div className="carousel-item">Family Law Triumph</div>
          <div className="carousel-item">Proven Advocacy</div>
          <div className="carousel-item">Corporate Compliance Victory</div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat">
          <div className="icon">⏳</div>
          <p className="value">18+</p>
          <p className="label">Years of experience</p>
        </div>
        <div className="stat">
          <div className="icon">✔️</div>
          <p className="value">98%</p>
          <p className="label">Successful resolutions</p>
        </div>
        <div className="stat">
          <div className="icon">🤝</div>
          <p className="value">500+</p>
          <p className="label">Satisfied customers</p>
        </div>
        <div className="stat">
          <div className="icon">🏆</div>
          <p className="value">50+</p>
          <p className="label">Awards and recognitions</p>
        </div>
        <div className="stat">
          <div className="icon">📂</div>
          <p className="value">100+</p>
          <p className="label">Projects completed</p>
        </div>
      </div>
    </div>
  );
};

export default CorporateExcellence;
