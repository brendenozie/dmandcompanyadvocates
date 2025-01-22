import React, { Component } from 'react';
import './Footer.css';
import logowh from "../../assets/logowh.png"; // Replace with your firm's logo
import certification from "../../assets/lawbanner.jpg"; // Replace with relevant certification logo

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      id: '',
      loading: false,
    };
  }

  render() {
    const { message, id, loading } = this.state;
    return (
      <footer className="footer text-white pt-5 pb-3">
        <div className="container">
          {/* Row 1: Logo and Description */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <img src={logowh} alt="D&M and Company Advocates Logo" className="mb-3" />
              <p>
                At D&M and Company Advocates, we are committed to providing expert legal solutions with professionalism and integrity. Let us help you navigate your legal challenges.
              </p>
            </div>

            {/* Navigation Columns */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold mb-3">Practice Areas</h6>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white">Family Law</a></li>
                <li><a href="/" className="text-white">Criminal Defense</a></li>
                <li><a href="/" className="text-white">Personal Injury</a></li>
                <li><a href="/" className="text-white">Business Law</a></li>
              </ul>
            </div>

            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold mb-3">About Us</h6>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white">Our Firm</a></li>
                <li><a href="/" className="text-white">Our Team</a></li>
                <li><a href="/" className="text-white">Blog</a></li>
              </ul>
            </div>

            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold mb-3">Resources</h6>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white">FAQ</a></li>
                <li><a href="/" className="text-white">Client Resources</a></li>
                <li><a href="/" className="text-white">Legal Guides</a></li>
                <li><a href="/" className="text-white">Contact Us</a></li>
              </ul>
            </div>

            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold mb-3">Legal</h6>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white">Terms of Use</a></li>
                <li><a href="/" className="text-white">Privacy Policy</a></li>
                <li><a href="/" className="text-white">Disclaimer</a></li>
                <li><a href="/" className="text-white">Non-Discrimination Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Row 2: Certifications */}
          <div className="row border-top pt-3 align-items-center">
            <div className="col-md-6">
              <p>Committed to Excellence in Legal Practice</p>
            </div>
            <div className="col-md-6 text-right">
              <a href="/"><img src={certification} alt="Certifications" /></a>
            </div>
          </div>

          {/* Row 3: Copyright */}
          <div className="text-center mt-4">
            <p>&copy; 2025 D&M and Company Advocates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
