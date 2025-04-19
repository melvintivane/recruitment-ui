import React from "react";
import Section from "./Section";
import PrivacyAndPolicyPage from "../../Company/PrivacyAndPolicy/PrivacyAndPolicyPage";

const PrivacyAndPolicy = () => {
  document.title =
    "Privacy & Policy | Hireway - Job Listing | Mobitel";
  return (
    <React.Fragment>
      <Section />
      <PrivacyAndPolicyPage />
    </React.Fragment>
  );
};
export default PrivacyAndPolicy;
