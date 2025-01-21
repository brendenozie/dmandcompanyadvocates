import React, { useEffect } from "react";
import "./homepage.css";
import Banner from "../components/Banner/Banner";
import Insurance from "../components/Insurance/Insurance";
import Services from "../components/Servicess/Services";
import Plans from "../components/Plans/Plans";
import Assessment from "../components/Assesment/Assessment";
import Faq from "../components/Faq/Faq";
import Getstarted from "../components/GetStarted/Getstarted";
import Review from "../components/Review/Review";

const HomePage = () => {

  return (
    <React.Fragment>
      <Banner />
      <Insurance />
      <Services />
      <Plans />
      <Assessment />
      <Faq />
      <Getstarted />
      <Review />
    </React.Fragment>
  );
};

export default HomePage





