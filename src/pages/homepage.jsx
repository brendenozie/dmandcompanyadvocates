import React, { useEffect } from "react";
import "./homepage.css";
import Banner from "../components/Banner/Banner";
import LegalServicesSection from "../components/LegalServicesSection/LegalServicesSection";
import ExpertiseBanner from "../components/ExpertiseBanner/ExpertiseBanner";
import CorporateExcellence from "../components/CorporateExcellence/CorporateExcellence";
import Blog from "../components/Blog/Blog";
import Faq from "../components/Faq/Faq";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Review from "../components/Review/Review";

const HomePage = () => {

  return (
    <React.Fragment>
      <Banner />
      <LegalServicesSection />
      <ExpertiseBanner />
      <Blog />
      <CorporateExcellence />
      <Faq />
      <WhyChooseUs />
      <Review />
    </React.Fragment>
  );
};

export default HomePage





