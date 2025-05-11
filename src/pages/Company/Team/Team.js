import React from "react";
import Section from "../Team/Section";
import TeamPage from "../Team/TeamPage";

const Team = () => {
  document.title = "Team | Recruitment - Job Listing | Mobitel";
  return (
    <React.Fragment>
      <Section />
      <TeamPage />
    </React.Fragment>
  );
};

export default Team;
