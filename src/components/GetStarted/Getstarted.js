import React, { Component } from 'react'
import './Getstarted.css'

class Getstarted extends Component {
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
      <section class="get-started-section-body">
        <div class="get-started-section">
            <h1>Get Started Today</h1>
            <div class="button-container">
                <a href="https://provider.kareo.com/mwikya-redempta" class="btn btn-get-started">Get Started</a>
            </div>
        </div>
    </section>
    )
  }
}

export default Getstarted
