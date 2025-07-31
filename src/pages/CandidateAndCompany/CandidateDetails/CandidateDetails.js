import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";
import { getCandidateById } from "../../../services/candidateService";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";

const CandidateDetails = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Detalhes do Candidato" : "Candidate Details";

  const { id } = useParams();

  const {
    data: candidate,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["candidateDetail", id],
    queryFn: () => getCandidateById(id),
    staleTime: 60 * 1000,
    retry: 1,
  });

  if (isLoading) {
    return (
      <section className="section">
        <Section />
        <Container>
          <div className="text-center py-5">
            <div
              className="spinner-grow text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">
                {language === "pt" ? "Carregando..." : "Loading..."}
              </span>
            </div>
            <p className="mt-3">
              {language === "pt"
                ? "Carregando detalhes do candidato..."
                : "Loading candidate details..."}
            </p>
          </div>
        </Container>
      </section>
    );
  }

  if (isError) {
    return (
      <>
        <Section />
        <section className="section">
          <Container>
            <div className="text-center py-5 text-danger">
              Error: {error.message || "Failed to fetch candidate details"}
            </div>
          </Container>
        </section>
      </>
    );
  }
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent data={candidate} />
            <RightSideContent data={candidate} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateDetails;
