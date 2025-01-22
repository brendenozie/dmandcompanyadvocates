import React, { useState } from 'react';
import './ExpertiseBanner.css';
import iconBusiness from '../../assets/lawbanner.jpg';
import iconHealthcare from '../../assets/lawbanner.jpg';
import iconCorporate from '../../assets/lawbanner.jpg';
import iconFamily from '../../assets/lawbanner.jpg';

const ExpertiseShowcase = () => {
  const cards = [
    {
      title: 'Business Law',
      description:
        'Providing tailored legal solutions for businesses of all sizes. Navigate contracts, compliance, and disputes with confidence.',
      icon: iconBusiness,
      category: 'Business',
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
    <section className="expertise-showcase" aria-label="Expertise Showcase">
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
              <button className="learn-more-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseShowcase;
