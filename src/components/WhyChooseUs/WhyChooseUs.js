import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const stats = [
    {
      value: "95%",
      description:
        "Thanks to our skills and commitment, our law firm achieves a high degree of efficiency in resolving cases.",
    },
    {
      value: "10+",
      description:
        "Years of experience is the solid foundation on which we base our law firm.",
    },
    {
      value: "+500",
      description:
        "More than 500 satisfied clients are the result of our excellent legal services.",
    },
  ];

  return (
    <section className="why-choose-us">
      <p className="subheading">What makes us different</p>
      <h2>Why choose our law firm?</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3>{stat.value}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
      <button className="cta-button">
        Schedule a consultation
      </button>
    </section>
  );
};

export default WhyChooseUs;
