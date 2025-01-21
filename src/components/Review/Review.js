import React, { Component } from 'react'
import './Review.css'

class Review extends Component {
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
        <section class="testimonial-card-body">
            <div class="testimonial-card">
                    <div class="quote-icon">“</div>
                    <p class="testimonial-quote">
                        My health has significantly improved! The care provided to me was exceptional! The medication I'm taking is
                        excellent, and the personalized support I've received is remarkable! My medical professional listens to me with
                        compassion and warmth!
                    </p>
                    <div class="testimonial-author">ARIA T</div>
                    <div class="stars">★★★★★</div>
            </div>
        </section>
    )
  }
}

export default Review
