import React from "react";
import About from "../../../pages/Company/AboutUs/About";
import Section from "../../../pages/Company/AboutUs/Section";
import Counter from "../../../pages/Company/AboutUs/Counter";
import Features from "../../../pages/Company/AboutUs/Features";
import Cta from "../../../pages/Company/AboutUs/Cta";
import CompanyTestimonal from "../../../pages/Company/AboutUs/CompanyTestimonal";
import { useLanguage } from "../../../context/LanguageContext";

const AboutUs = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Sobre Nós" : "About Us";

  return (
    <React.Fragment>
      <Section />
      <About />
      <Counter />
      <Features />
      <Cta />
      <CompanyTestimonal />
    </React.Fragment>
  );
};

export default AboutUs;
