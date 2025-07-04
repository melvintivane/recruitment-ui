import React from "react";
import { Col, Container, Row } from "reactstrap";
import CandidateDetails from "./CandidateDetails";
import JobFilters from "./JobFilters";
import Section from "./Section";
import Pagination from "../../../components/Pagination";

const CandidateList = () => {
  document.title =
    "Candidate List | Recruitment - Job Listing | MobiSolutions";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <JobFilters />
          <Row>
            <Col lg={12}>
              <CandidateDetails />
            </Col>
          </Row>
          <Pagination />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateList;
