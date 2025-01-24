// About.js
import React from "react";
import "./About.css";
import dm from "../../assets/chief.png";

const About = () => {
  const expertiseAreas = [
    {
      title: "Media Freedom and Legal Advocacy",
      points: [
        "Defending journalists and media outlets from legal threats.",
        "Advising on media laws, defamation, and freedom of expression.",
        "Supporting resources for protecting sources and AI regulations."
      ]
    },
    {
      title: "Technology and Intellectual Property Law",
      points: [
        "Advising on data protection, privacy, and cybersecurity compliance.",
        "Providing IP protection strategies for media and tech entities.",
        "Addressing legal challenges in technology and innovation."
      ]
    },
    {
      title: "Corporate Governance and Compliance",
      points: [
        "Assisting with corporate structuring and governance frameworks.",
        "Advising on regulatory compliance for businesses and NGOs."
      ]
    },
    {
      title: "Employment Law",
      points: [
        "Drafting employment contracts and workplace policies.",
        "Addressing disputes and ensuring compliance with labor laws."
      ]
    },
    {
      title: "Capacity-Building for Media Organizations",
      points: [
        "Supporting training programs on legal literacy and rights awareness.",
        "Creating guides on defamation laws and journalistic integrity."
      ]
    }
  ];

  return (
    <div className="about-container">
      <header className="hero">
        <h1>Devinah Manyasi & Company Advocates</h1>
        <p>Empowering organizations through innovative legal solutions.</p>
      </header>

      <section className="ceo-profile">
        <div className="ceo-details">
          <img src={dm} alt="Devinah Manyasi" className="ceo-photo" />
          <div className="ceo-info">
            <h3>Devinah Manyasi</h3>
            <p>
              Devinah Manyasi is the founder and lead advocate at Devinah Manyasi
              and Company Advocates, bringing years of expertise in media law,
              corporate governance, and advocacy for justice.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>
          Devinah Manyasi and Company Advocates is a full-service law firm based
          in Kenya, dedicated to providing innovative and client-centered legal
          solutions.
        </p>
      </section>

      <section className="expertise">
        <h2>Areas of Expertise</h2>
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={index} title={area.title} points={area.points} />
          ))}
        </div>
      </section>

      <section className="mission-vision">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To empower independent media, social enterprises, and businesses
            through innovative legal solutions.
          </p>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To provide high-quality, client-focused legal services while
            advancing media freedom, corporate governance, and sustainable
            growth.
          </p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
           Email: <a href="mailto:dmandcompanyadvocates@gmail.com">dmandcompanyadvocates@gmail.com</a>
        </p>
        <p>
           Phone: <a href="tel:+254799031138">+254799031138</a>
        </p>
      </section>
    </div>
  );
};

const ExpertiseCard = ({ title, points }) => (
  <div className="expertise-card">
    <h3>{title}</h3>
    <ul>
      {points.map((point, index) => (
        <li key={index}> {point}</li>//<FaCheck className="icon" />
      ))}
    </ul>
  </div>
);

export default About;
