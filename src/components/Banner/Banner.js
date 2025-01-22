import React from 'react';
import './Banner.css';
import bannerImage from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <section className="banner" aria-label="Promotional Banner">
      <div
        className="banner-bg"
        style={{
          backgroundImage: `url(${bannerImage})`,
          aspectRatio: "16/9",
        }}
      ></div>
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className="banner-heading">
          Your Trusted Legal Partners for Every Step of the Way
        </h1>
        <p className="banner-subheading">
          Offering tailored legal solutions to meet your unique needs, with professionalism and care at every step.
        </p>
        <div className="cta-buttons">
          <a href="#services" className="cta-button" aria-label="Learn More About Our Services">
            Learn More
          </a>
          <a href="/contact" className="cta-button" aria-label="Contact Us for Legal Assistance">
            Contact Us
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to Discover</span>
        <div className="scroll-animation"></div>
      </div>
    </section>
  );
};

export default Banner;
