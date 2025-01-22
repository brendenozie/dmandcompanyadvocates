import React from "react";
import "./CorporateExcellence.css";
import familyLawImage from "../../assets/banner.jpg";
import businessLawImage from "../../assets/banner.jpg";
import corporateLawImage from "../../assets/banner.jpg";

const CorporateExcellence = () => {
  const carouselItems = [
    {
      image: familyLawImage,
      title: "Family Law Triumph",
      subtitle: "Family Law",
    },
    {
      image: businessLawImage,
      title: "Proven Advocacy",
      subtitle: "Business Law",
    },
    {
      image: corporateLawImage,
      title: "Corporate Compliance Victory",
      subtitle: "Corporate Law",
    },
  ];

  const stats = [
    { icon: "⏳", value: "18+", label: "Years of experience" },
    { icon: "✅", value: "98%", label: "Successful resolutions" },
    { icon: "🤝", value: "500+", label: "Satisfied customers" },
    { icon: "🏆", value: "50+", label: "Awards and recognitions" },
    { icon: "📁", value: "100+", label: "Projects completed" },
  ];

  return (
    <section className="corporate-excellence">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Corporate Excellence</h1>
        <div className="carousel">
          {carouselItems.map((item, index) => (
            <div key={index} className="carousel-card">
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateExcellence;
