import React from "react";
import Section from "../../Company/Pricing/Section";
import PricingPage from "../../Company/Pricing/PricingPage";
import Cta from "../../Company/Pricing/Cta";
import { useLanguage } from "../../../context/LanguageContext";

const Pricing = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Preços" : "Pricing";
  
  return (
    <React.Fragment>
      <Section />
      <PricingPage />
      <Cta />
    </React.Fragment>
  );
};

export default Pricing;
