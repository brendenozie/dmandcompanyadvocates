import React, { Component } from 'react'
import './Plans.css'

class Plans extends Component {
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
            <section className="container my-5">
                <h2 className="text-center section-heading">Our Plan Options</h2>
                <p className="text-center section-subheading mb-4">Affordable care, with or without coverage</p>
                <p className="text-center text-muted">Because quality mental health care shouldn't be out of reach for anyone.</p>
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
                    {/* Individual Session */}
                    <div className="col">
                        <div className="card pricing-card individual">
                            <div className="card-header">Individual Session</div>
                            <div className="card-body">
                                <div className="price">$120 PER SESSION</div>
                                <p>1 x 50-Minute Zoom Session</p>
                                <p>Ideal for those seeking personalized, one-on-one therapy.</p>
                                <button className="btn btn-get-started">Get Started</button>
                            </div>
                        </div>
                    </div>

                    {/* Therapy Plus */}
                    <div className="col">
                        <div className="card pricing-card plus">
                            <div className="card-header">Therapy Plus</div>
                            <div className="card-body">
                                <div className="price">$400 PER MONTH</div>
                                <p>4 x 50-Minute Zoom Session</p>
                                <p>For ongoing support, this plan provides weekly therapy sessions.</p>
                                <button className="btn btn-get-started">Get Started</button>
                            </div>
                        </div>
                    </div>

                    {/* Therapy Premium */}
                    <div className="col">
                        <div className="card pricing-card premium">
                            <div className="card-header">Therapy Premium</div>
                            <div className="card-body">
                                <div className="price">$650 PER MONTH</div>
                                <p>4 x 50-Minute Zoom Session + 2 x 30-Minute Check-ins</p>
                                <p>Our most popular plan offers weekly therapy sessions plus extra support.</p>
                                <button className="btn btn-get-started">Get Started</button>
                            </div>
                        </div>
                    </div>

                    {/* Therapy Premium + Crisis Support */}
                    <div className="col">
                        <div className="card pricing-card premium-crisis">
                            <div className="card-header">Therapy Premium + Crisis Support</div>
                            <div className="card-body">
                                <div className="price">$950 PER MONTH</div>
                                <p>6 x 50-Minute Zoom Session + 2 x 30-Minute Check-ins + 24/7 Crisis Support</p>
                                <p>For those at elevated risk or seeking intensive care, with 24/7 crisis support.</p>
                                <button className="btn btn-get-started">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
  }
}

export default Plans
