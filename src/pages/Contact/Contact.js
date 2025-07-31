import React from "react";
import Section from "../Contact/Section";
import ContactContent from "../Contact/ContactContent";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Contacto" : "Contact";

  return (
    <React.Fragment>
      <Section />
      <ContactContent />
    </React.Fragment>
  );
};

export default Contact;
