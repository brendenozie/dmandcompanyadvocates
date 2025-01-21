import React, { Component } from 'react'
import './Insurance.css'
import smallbanner from "../../assets/smallbanner.png"

class Insurance extends Component {
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
           <div className="insurance-section d-flex justify-content-center align-items-center">
                <div className="col-md-6 justify-content-center text-center">
                    <p style={{ fontWeight: "bold", fontSize: "24px", color: "#fff" }}>We accept insurance</p>
                    <p style={{ fontSize: "14px", color: "#fff" }}>We offer affordable care for everyone and accept most major insurance, including Medicare and Medicaid.</p>
                    <p style={{ fontSize: "20px", fontWeight: "bold", color: "#add5f5" }}>Learn More</p>
                </div>
                <div className="col-md-4 d-md-block">
                    <img src={smallbanner} alt="Yoga Pose" className="img-fluid" style={{ height: "110px" }} />
                </div>
            </div>
    )
  }
}

export default Insurance
