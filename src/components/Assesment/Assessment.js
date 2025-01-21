import React, { Component } from 'react'
import './Assessment.css'

class Assessment extends Component {
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
        <section className="info-section-body">
            <div className="info-section">
                <div className="info-text">
                    <h1>We treat the full spectrum of anxiety & depression</h1>
                    <p>Whether your symptoms are mild or severe, our experts can provide the life-changing care you need to get better.</p>
                    <button className="btn btn-primary">Start with a Free Assessment</button>
                </div>
                <div className="conditions-list">
                    <h5>Get Help For:</h5>
                    <ul>
                        <li>Panic disorder</li>
                        <li>Insomnia</li>
                        <li>Bipolar</li>
                        <li>Post-traumatic stress disorder (PTSD)</li>
                        <li>Social anxiety disorder</li>
                        <li>Generalized anxiety disorder</li>
                        <li>Major depressive disorder</li>
                        <li>Postpartum depression</li>
                        <li>Premenstrual dysphoric disorder (PMDD)</li>
                        <li>Seasonal affective disorder</li>
                        <li>Phobia</li>
                        <li>Obsessive-compulsive disorder (OCD)</li>
                    </ul>
                </div>
                <div className="crisis-care">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/mental-health.png" alt="Crisis Care Icon" />
                    <div className="crisis-care-text">
                        <strong>Introducing Crisis Care</strong><br />
                        Crisis Care is a first-of-its-kind program developed specifically to help individuals who are at an elevated risk for suicide. If you're experiencing suicidal thoughts and/or have had a recent suicide attempt, this highly-collaborative, 1:1 program may be a good fit for you.
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default Assessment
