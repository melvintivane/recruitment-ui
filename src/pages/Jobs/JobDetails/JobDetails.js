import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useQuery } from "react-query";
import JobDetailsDescription from "./JobDetailsDescription";
import JobVacancyPost from "./JobVacancyPost";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { getVacancyById } from "../../../services/vacancyService";

const JobDetails = () => {
  document.title = "Detalhes da Vaga";
  const { id } = useParams();

  const {
    data: job,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["jobDetails", id],
    queryFn: () => getVacancyById(id),
    staleTime: 60 * 1000, // 1 minuto de cache
    retry: 1, // Número de tentativas em caso de erro
  });

  if (isLoading) {
    return <div className="text-center py-5">Loading job details...</div>;
  }

  if (isError) {
    return (
      <div className="text-center py-5 text-danger">
        Error: {error.message || "Failed to fetch job details"}
      </div>
    );
  }

  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={8}>
              <JobDetailsDescription job={job} />
              <JobVacancyPost jobId={job.id} />
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <RightSideContent job={job} />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobDetails;
