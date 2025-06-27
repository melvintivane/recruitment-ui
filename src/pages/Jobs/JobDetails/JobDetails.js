import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import JobDetailsDescription from "./JobDetailsDescription";
import JobVacancyPost from "./JobVacancyPost";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { getSimilarVacancies, getVacancyById } from "../../../services/vacancyService";

const JobDetails = () => {
  document.title = "Job Details | Recruitment - Job Listing | MobiSolutions";
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [similarJobs, setSimilarJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const response = await getVacancyById(id);
        const similarJobs = await getSimilarVacancies(id);

        console.log(similarJobs.content);
        
        setJob(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center py-5">Loading job details...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Error: {error}</div>;
  }

  if (!job) {
    return <div className="text-center py-5">Job not found</div>;
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