import React from "react";
import Section from "../../Company/Pricing/Section";
import PricingPage from "../../Company/Pricing/PricingPage";
import Cta from "../../Company/Pricing/Cta";

const Pricing = () => {
  document.title = "Pricing | Recruitment - Job Listing | MobiSolutions";
  return (
    <React.Fragment>
      <Section />
      <PricingPage />
      <Cta />
    </React.Fragment>
  );
};

export default Pricing;
