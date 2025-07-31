import React from "react";
import { Col, Container, Row } from "reactstrap";
import CandidateDetails from "./CandidateDetails";
import JobFilters from "./JobFilters";
import Section from "./Section";
import { useLanguage } from "../../../context/LanguageContext";

const CandidateList = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Lista de Candidatos" : "Candidate List";

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
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateList;
