import React, { Component } from 'react'
import './Services.css'
import maximize from "../../assets/maximize.png"
import phone from "../../assets/phone.png"

class Services extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      id: '',
      loading: false,
    }
  }

  render() {
    const { message, id, loading } = this.state
    return (
      <section className="phonebody how-it-works">
        <div className="container">
            <h2>All the support you need. Any time, anywhere.</h2>
            <p>Get started and connect with an expert in as little as 2 days.</p>
            
            <div className="row">
                {/* Features on the left */}
                <div className="col-md-4">
                    <div className="feature-item">
                        <img src={maximize} alt="Icon" />
                        <div>
                            <h6>Connect 1:1 with your providers</h6>
                            <p>They'll both be by your side at every step of your journey.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src={maximize} alt="Icon" />
                        <div>
                            <h6>Get treatment tailored to you</h6>
                            <p>Your providers will use science & personal data to discover the most effective treatments for you.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src={maximize} alt="Icon" />
                        <div>
                            <h6>Pick up from local pharmacy</h6>
                            <p>If medication is prescribed, we'll send it to your local pharmacy for quick & easy access.</p>
                        </div>
                    </div>
                </div>

                {/* Phone mockup in the center */}
                <div className="col-md-4 text-center">
                    <div className="phone-section">
                        <img src={phone} alt="Phone Mockup" className="phone-mockup" />
                    </div>
                </div>

                {/* Features on the right */}
                <div className="col-md-4">
                    <div className="feature-item" style={{
                        background: "white",
                        borderRadius: "12px",
                        color: "#000",
                        padding: "5px",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)"
                    }}>
                        <img src={maximize} alt="Icon" />
                        <div>
                            <h6>Complete a self-guided program</h6>
                            <p>Practice retraining your thoughts and applying what you learn via our 10-lesson program.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src={maximize} alt="Icon" />
                        <div>
                            <h6>Enjoy anytime messaging</h6>
                            <p>Easily contact your providers for questions or support in between sessions.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src={maximize} alt="Icon" />
                        <div>
                            <h6>Track your progress</h6>
                            <p>Utilize our Proactive Progress Tracking tool and weekly check-ins. Then, adjust your treatment if necessary.</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-3" style={{
                fontSize: "30px",
                lineHeight: "38px",
                color: "rgb(46, 73, 133)"
            }}>Get Started and connect with an expert same day.</p>
            <p className="cta">Start with a <a href="https://provider.kareo.com/mwikya-redempta">free assessment</a></p>
        </div>
    </section>
    )
  }
}

export default Services
