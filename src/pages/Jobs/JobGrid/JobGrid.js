import React from "react";
import { Col, Container, Row } from "reactstrap";
import JobGridHeader from "./JobGridHeader";
import JobVacancy from "./JobVacancy";
import JobVacancyNew from "./JobVacancyNew";
import Section from "./Section";
import Selected from "./Selected";
import Pagination from "../JobList2/Pagination";

const JobGrid = () => {
  document.title = "Job Grid | Recruitment - Job Listing | MobiSolutions";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <JobGridHeader />
          <Selected />
          <Row>
            <Col lg={6}>
              <JobVacancy />
            </Col>
            <Col lg={6}>
              <JobVacancyNew />
            </Col>
          </Row>
          <Pagination />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobGrid;
