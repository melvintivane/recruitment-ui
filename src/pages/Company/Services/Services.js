import React from "react";
import Section from "../Services/Section";
import ServicePage from "../Services/ServicePage";
import { useLanguage } from "../../../context/LanguageContext";

const Services = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Serviços" : "Services";
  
  return (
    <React.Fragment>
      <Section />
      <ServicePage />
    </React.Fragment>
  );
};

export default Services;
