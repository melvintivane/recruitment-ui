import React from "react";
import Section from "../../Company/Faqs/Section";
import FaqContent from "../../Company/Faqs/FaqContent";

const Faqs = () => {
  document.title = "FAQs | Recruitment - Job Listing | Mobitel";
  return (
    <React.Fragment>
      <Section />
      <FaqContent />
    </React.Fragment>
  );
};

export default Faqs;
