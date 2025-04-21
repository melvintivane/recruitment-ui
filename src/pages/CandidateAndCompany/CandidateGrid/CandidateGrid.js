import React from "react";
import { Container } from "reactstrap";
import JobFilters from "../CandidateList/JobFilters";
import CandidateGridDetails from "./CandidateGridDetails";
import Section from "./Section";
import Pagination from "../../../components/Pagination";

const CandidateGrid = () => {
  document.title =
    "Candidate Grid | Hireway - Job Listing | Mobitel";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <JobFilters />
          <CandidateGridDetails />
          <Pagination />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateGrid;
