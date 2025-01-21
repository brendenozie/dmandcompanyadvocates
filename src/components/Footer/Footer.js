import React, { Component } from 'react'
import './Footer.css'
import logowh from "../../assets/logowh.png"
import hipaa from "../../assets/hipaa.png"

class Footer extends Component {
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
            <footer class="footer text-white pt-5 pb-3">
                <div class="container">
                    {/* <!-- Row 1: Logo and description --> */}
                    <div class="row mb-4">
                        <div class="col-md-4 mb-3">
                            <img src={logowh} alt="King County Psychiatry Logo" class="mb-3"/>
                            <p>
                                We’re committed to delivering life-changing anxiety and depression care to everyone who needs it.
                            </p>
                        </div>
            
                        {/* <!-- Navigation columns --> */}
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold mb-3">What We Offer</h6>
                            <ul class="list-unstyled">
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Psychiatry</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Therapy</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Psychiatry + Therapy</a></li>
                            </ul>
                        </div>
            
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold mb-3">Who We Are</h6>
                            <ul class="list-unstyled">
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">About Us</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Our Providers</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Visit Our Blog</a></li>
                            </ul>
                        </div>
            
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold mb-3">Our Care</h6>
                            <ul class="list-unstyled">
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Insurance</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Conditions</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Medications</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">FAQ</a></li>
                            </ul>
                        </div>
            
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold mb-3">For Partners</h6>
                            <ul class="list-unstyled">
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Health Systems</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Health Plans</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Medical Groups</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Become an Affiliate</a></li>
                            </ul>
                        </div>
            
                        <div class="col-md-2 mb-3">
                            <h6 class="text-uppercase font-weight-bold mb-3">Legal</h6>
                            <ul class="list-unstyled">
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Terms of Use</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Privacy</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Informed Consent for Treatment</a></li>
                                <li><a href="https://provider.kareo.com/mwikya-redempta" class="text-white">Notice of Non-Discrimination</a></li>
                            </ul>
                        </div>
                    </div>
            
                    {/* <!-- Row 2: App buttons and certifications --> */}
                    <div class="row border-top pt-3 align-items-center">
                        <div class="col-md-6">
                            <div class="mb-3">
                                {/* <!-- <a href="https://provider.kareo.com/mwikya-redempta"><img src="https://via.placeholder.com/150x50" alt="App Store" class="mr-2"></a>
                                <a href="https://provider.kareo.com/mwikya-redempta"><img src="https://via.placeholder.com/150x50" alt="Google Play"></a> --> */}
                            </div>
                        </div>
                        <div class="col-md-6 text-right">
                            {/* <a href="https://provider.kareo.com/mwikya-redempta"><img src={hipaa} alt="BBB" class="mr-2"/></a>
                            <a href="https://provider.kareo.com/mwikya-redempta"><img src={hipaa} alt="HIPAA" class="mr-2"/></a> */}
                            <a href="https://provider.kareo.com/mwikya-redempta"><img src={hipaa} alt="HITRUST"/></a>
                        </div>
                    </div>
            
                    {/* <!-- Row 3: Copyright --> */}
                    <div class="text-center mt-4">
                        <p>&copy; 2024 King County Psychiatry. All rights reserved.</p>
                    </div>
                </div>
            </footer>
    )
  }
}

export default Footer
