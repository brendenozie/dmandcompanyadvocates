import React, { Component } from 'react';
import './Banner.css';
import yoga from "../../assets/yoga.png";

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      id: '',
      loading: false,
    };
  }

  render() {
    return (
      <div className="banner d-flex flex-column flex-md-row align-items-center">
        <div className="col-md-7 text-left content-section">
          <h6 className="subheading">COMPASSIONATE CARE + EXPERT GUIDANCE</h6>
          <h1>Personalized online therapy and psychiatry for anxiety, depression, and more</h1>
          <p>Receive tailored treatment from experienced professionals who are with you every step of the way—
            starting with a free, no-commitment consultation.</p>
          <p className="mt-3 highlight-text">Need help fast? Same-day appointments are available.</p>
          <a href="https://provider.kareo.com/mwikya-redempta" className="btn btn-primary">START WITH A FREE ASSESSMENT</a>
          <p className="mt-3 highlight-text">You're all-in-one platform for expert therapy and Personalized medication support.</p>
        </div>
        <div className="col-md-5 image-section p-0">
          <img src={yoga} alt="Yoga Pose" className="img-fluid yoga-img w-100" />
        </div>
      </div>
    );
  }
}

export default Banner;
