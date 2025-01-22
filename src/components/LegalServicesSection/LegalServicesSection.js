// App.js
import React from 'react';
import './LegalServicesSection.css';
import consultationImage from '../../assets/lawbanner.jpg';
import { Link } from 'react-router-dom';

function LegalServicesSection() {
  return (
    <div className="app" id='about'>
      <div className="layout">
        {/* Left Section */}
        <div className="left-section">
          <header className="header">
            <h1>Protecting Rights with Integrity and Expertise</h1>
            <p>
              Lawware delivers trusted legal solutions with integrity and excellence. We empower clients by safeguarding their rights and providing expert guidance.
            </p>
            <Link to={"/contact"} >
              <button className="learn-more">Learn More</button>
            </Link>
          </header>

          <div className="card-section">
            <Card
              title="Commercial Litigation"
              description="Ultrices massa felis dolor imperdiet penatibus magna volutpat dis etiam condimentum feugiat habitant nunc"
              image={consultationImage}
            />
            <Card
              title="Strategic Information"
              description="Eros a ex at penatibus cras odio ullamcorper penatibus bibendum aptent lectus lobortis bibendum per"
              image={consultationImage}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <VideoSection image={consultationImage} />

          <div className="legal-progress-section">
            <ProgressBar title="Corporate Law Specialist" percentage={90} />
            <ProgressBar title="Case Management" percentage={80} />
            <ProgressBar title="Recharge & Analytics Skill" percentage={75} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalServicesSection;

function Card({ title, description, image }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-overlay">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function VideoSection({ image }) {
  return (
    <div className="video-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="play-button">▶</div>
    </div>
  );
}

function ProgressBar({ title, percentage }) {
  return (
    <div className="legal-progress-bar">
      <div className="progress-info">
        <span className="progress-title">{title}</span>
        <span className="progress-percentage">{percentage}%</span>
      </div>
      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

