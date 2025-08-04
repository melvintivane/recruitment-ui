import React from "react";
import Categories from "./Categories";
// import Cta from "./Cta";
import Section from "./Section";
import { useLanguage } from "../../../context/LanguageContext";

const JobsCategories = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Categorias de Vagas" : "Job Categories";
  
  return (
    <React.Fragment>
      <Section />
      <Categories />
      {/* <Cta /> */}
    </React.Fragment>
  );
};

export default JobsCategories;
