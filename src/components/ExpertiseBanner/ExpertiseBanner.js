import React from 'react';
import './ExpertiseBanner.css';
import iconBusiness from '../../assets/lawbanner.jpg'; // Replace with your business icon
import iconHealthcare from '../../assets/lawbanner.jpg'; // Replace with your healthcare icon
import iconCorporate from '../../assets/lawbanner.jpg'; // Replace with your corporate icon
import iconFamily from '../../assets/lawbanner.jpg'; // Replace with your family icon

const ExpertiseBanner = () => {
  const cards = [
    {
      title: 'Business Law',
      description:
        'Providing tailored legal solutions for businesses of all sizes. Navigate contracts, compliance, and disputes with confidence.',
      icon: iconBusiness,
    },
    {
      title: 'Healthcare Law',
      description:
        'Specialized support for healthcare professionals and facilities. Ensure compliance and resolve medical-legal challenges effectively.',
      icon: iconHealthcare,
    },
    {
      title: 'Corporate Law',
      description:
        'Comprehensive legal services for corporate operations and growth. Stay compliant and protect your organization’s interests.',
      icon: iconCorporate,
    },
    {
      title: 'Family Law',
      description:
        'Empathetic guidance for family legal matters like custody and divorce. Achieve resolutions that prioritize harmony and fairness.',
      icon: iconFamily,
    },
  ];

  const handleDotClick = (index) => {
    console.log(`Dot ${index + 1} clicked!`); // Placeholder for pagination functionality
  };

  return (
    <section className="expertise-banner" aria-label="Expertise Banner">
      <div className="container">
        <div className="header-section">
          <h2 className="heading">Our Expertise</h2>
          <p className="subheading">
            Discover a diverse range of legal services designed to protect your interests. From family matters to corporate solutions, we’ve got you covered.
          </p>
          <button className="view-all-button">View All</button>
        </div>

        <div className="cards-container">
          {cards.map((card, index) => (
            <div key={index} className="expertise-card" aria-label={card.title}>
              <div className="icon-container">
                <img src={card.icon} alt={`${card.title} Icon`} />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <button className="learn-more-button">Learn More</button>
            </div>
          ))}
        </div>

        <div className="pagination-dots">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className={`dot ${index === 0 ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseBanner;
