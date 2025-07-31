import React from "react";
import Section from "../Team/Section";
import TeamPage from "../Team/TeamPage";
import { useLanguage } from "../../../context/LanguageContext";

const Team = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Equipa" : "Team";

  return (
    <React.Fragment>
      <Section />
      <TeamPage />
    </React.Fragment>
  );
};

export default Team;
