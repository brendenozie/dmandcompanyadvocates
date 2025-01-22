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
          { 
            question: "What types of legal services do you offer?", 
            answer: "We provide a range of legal services, including family law, criminal defense, personal injury, estate planning, and business law. Contact us to learn more about how we can assist you." 
          },
          { 
            question: "What should I bring to my first consultation?", 
            answer: "For your first consultation, bring any relevant documents, contracts, or correspondence related to your case. This helps us provide accurate advice and evaluate your situation effectively." 
          },
          { 
            question: "How do your fees work?", 
            answer: "Our fees vary depending on the type and complexity of the case. We offer transparent billing options and will discuss costs during your initial consultation to ensure clarity." 
          },
          { 
            question: "Do you offer free consultations?", 
            answer: "Yes, we offer a free initial consultation to discuss your case and explain how we can help. This allows us to understand your needs and provide tailored advice." 
          },
          { 
            question: "How do I get updates on my case?", 
            answer: "We keep our clients informed at every stage of their case. You can expect regular updates via phone, email, or our secure client portal." 
          },
        ];


    return (
      <section className="faq-section-body">
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
          <a href="/contact" className="contact-link">Didn't find what you're looking for? Contact us.</a>
        </div>
      </section>
    );
  }
}

export default Faq;

