import React, { Component, useState } from 'react';
import './Faq.css'


// Individual FAQ item component
const FAQItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleFAQ = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={toggleFAQ}>
      <h3 className="faq-question">{question}</h3>
      {isActive && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

// Main FAQ section component
class Faq extends Component {
  render() {
    const faqItems = [
      { question: "What happens if my insurance is not accepted?", answer: "If your insurance is not accepted, we offer a variety of affordable self-pay options. Reach out to our support team for more information." },
      { question: "What about men's mental health?", answer: "Men's mental health is just as important, and our professionals are experienced in providing care for a range of issues including depression, anxiety, and stress." },
      { question: "How can I reach out if I have a crisis?", answer: "If you are in a crisis, please call your local emergency number or reach out to a crisis hotline immediately. Our service is available for scheduled sessions, not emergencies." },
      { question: "How do I get my prescription?", answer: "Once prescribed, we can have your medication delivered to your preferred pharmacy. For certain medications, delivery is available directly to your home." },
    ];

    return (
      <section className="faq-section-body">
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
          <a href="https://provider.kareo.com/mwikya-redempta" className="contact-link">Didn't find what you're looking for? Contact us.</a>
        </div>
      </section>
    );
  }
}

export default Faq;

