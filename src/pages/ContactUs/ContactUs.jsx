import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* Header Section */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We are here to assist you. Feel free to reach out and we will respond as soon as possible.</p>
      </header>

      {/* Contact Details Section */}
      <section className="contact-details">
        <h2>Our Office</h2>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">📞</div>
            <span>+254 799 031 138</span>
          </div>
          <div className="contact-item">
            <div className="icon">📧</div>
            <span>dmandcompanyadvocates@gmail.com</span>
          </div>
          <div className="contact-item">
            <div className="icon">🏠</div>
            <span>123 Main Street, City, Country</span>
          </div>
        </div>

        {/* Get in Touch CTA Button */}
        <div className="cta">
          <a href="mailto:dmandcompanyadvocates@gmail.com" className="cta-btn">
            Get in Touch
          </a>
        </div>

        {/* Location Map Section */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=your-location-map-url-here"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      
    </div>
  );
};

export default ContactUs;
