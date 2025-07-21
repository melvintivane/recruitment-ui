import React from "react";
import { Input } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

const JobSearch = () => {
  const {language} = useLanguage();
  return (
    <React.Fragment>
      <Input
        type="search"
        id="job-title"
        className="form-control filter-input-box"
        placeholder={language === 'pt' ? "Emprego, nome da empresa..." : "Job, company name..."}
      />
    </React.Fragment>
  );
};

export default JobSearch;
