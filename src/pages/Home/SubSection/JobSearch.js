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
        placeholder={language === 'pt' ? "Título da vaga, etc..." : "Job title, etc..."}
      />
    </React.Fragment>
  );
};

export default JobSearch;
