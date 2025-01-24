import React, { useState, useEffect } from "react";
import "./CorporateExcellence.css";
import MeetTheTeam from "../MeetTheTeam/MeetTheTeam";

const CorporateExcellence = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const carouselItems = [
    "Family Law Triumph",
    "Proven Advocacy",
    "Corporate Compliance Victory"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % carouselItems.length);
    }, 3000); // Automatically change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="corporate-container">
      {/* Top Banner */}
      <div className="corporate-banner">
        <h1>Corporate Excellence</h1>
        <div className="carousel">
          <div className="carousel-item">{carouselItems[currentItem]}</div>
        </div>
      </div>

      <MeetTheTeam />
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
