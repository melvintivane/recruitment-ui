import React from "react";
import { Container } from "reactstrap";
import JobListing from "./JobListing";
import Section from "./Section";
import Selected from "./Selected";

const ManageJobs = () => {
  document.title = "Minhas Candidaturas | Recruitment - Job Listing | MobiSolutions";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Selected />
          <JobListing />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ManageJobs;
