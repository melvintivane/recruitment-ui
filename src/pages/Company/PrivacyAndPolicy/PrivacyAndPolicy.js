import React from "react";
import Section from "./Section";
import PrivacyAndPolicyPage from "../../Company/PrivacyAndPolicy/PrivacyAndPolicyPage";
import { useLanguage } from "../../../context/LanguageContext";

const PrivacyAndPolicy = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Política de Privacidade" : "Privacy Policy";
  
  return (
    <React.Fragment>
      <Section />
      <PrivacyAndPolicyPage />
    </React.Fragment>
  );
};
export default PrivacyAndPolicy;
