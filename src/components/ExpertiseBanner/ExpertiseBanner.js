import React, { useState } from 'react';
import './ExpertiseBanner.css';
import iconBusiness from '../../assets/regulation.png';
import iconHealthcare from '../../assets/ethical.png';
import iconCorporate from '../../assets/government.png';
import iconFamily from '../../assets/family-law.png';
import { Link } from 'react-router-dom';

const ExpertiseShowcase = () => {
  const cards = [
    {
      title: "Media Freedom and Legal Advocacy",
      description: "Defending journalists and media outlets from legal threats.Advising on media laws, defamation, and freedom of expression. Supporting resources for protecting sources and AI regulations.",
      icon: iconBusiness,
      category: 'Business',
    },
    {
      title: "Technology and Intellectual Property Law",
      description: "Advising on data protection, privacy, and cybersecurity compliance. Providing IP protection strategies for media and tech entities.Addressing legal challenges in technology and innovation."
      ,
      icon: iconBusiness,
      category: 'Business',
    },
    {
      title: "Employment Law",
      description:"Drafting employment contracts and workplace policies.Addressing disputes and ensuring compliance with labor laws."
      ,
      icon: iconBusiness,
      category: 'Business',
    },
    {
      title: "Capacity-Building for Media Organizations",
      description:"Supporting training programs on legal literacy and rights awareness.Creating guides on defamation laws and journalistic integrity."
      ,
      icon: iconBusiness,
      category: 'Business',
    },
    {
      title: 'Business Law',
      description:
        'Providing tailored legal solutions for businesses of all sizes. Navigate contracts, compliance, and disputes with confidence.',
      icon: iconBusiness,
      category: 'Business',
    },
    {
      title: "Corporate Governance and Compliance",
      description:
      "Assisting with corporate structuring and governance frameworks. Advising on regulatory compliance for businesses and NGOs.",
      icon: iconCorporate,
      category: 'Corporate',
    },
    {
      title: 'Healthcare Law',
      description:
        'Specialized support for healthcare professionals and facilities. Ensure compliance and resolve medical-legal challenges effectively.',
      icon: iconHealthcare,
      category: 'Healthcare',
    },
    {
      title: 'Corporate Law',
      description:
        'Comprehensive legal services for corporate operations and growth. Stay compliant and protect your organization’s interests.',
      icon: iconCorporate,
      category: 'Corporate',
    },
    {
      title: 'Family Law',
      description:
        'Empathetic guidance for family legal matters like custody and divorce. Achieve resolutions that prioritize harmony and fairness.',
      icon: iconFamily,
      category: 'Family',
    },
  ];

  const [filter, setFilter] = useState('All');

  const filteredCards = filter === 'All' ? cards : cards.filter((card) => card.category === filter);

  return (
    <section className="expertise-showcase" id="services" aria-label="Expertise Showcase">
      <div className="container">
        <div className="header-section">
          <h2 className="heading">Our Expertise</h2>
          <p className="subheading">
            Discover a diverse range of legal services designed to protect your interests. From family matters to corporate solutions, we’ve got you covered.
          </p>
          <div className="filter-buttons">
            {['All', 'Business', 'Healthcare', 'Corporate', 'Family'].map((category) => (
              <button
                key={category}
                className={`filter-button ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="cards-container">
          {filteredCards.map((card, index) => (
            <div
              className="expertise-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="icon-container">
                <img src={card.icon} alt={`${card.title} icon`} />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <Link to="/contact">
                <button className="learn-more-button">Learn More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseShowcase;
