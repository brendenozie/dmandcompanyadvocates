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
                        My experience with the law firm has been outstanding! 
                        The legal support provided to me was exceptional. 
                        The advice and representation I received were top-notch, 
                        and the personalized attention to my case was remarkable. 
                        My attorney listened to me with compassion and understanding, 
                        making me feel confident and supported throughout the entire process!

                    </p>
                    <div class="testimonial-author">ARIA T</div>
                    <div class="stars">★★★★★</div>
            </div>
        </section>
    )
  }
}

export default Review
