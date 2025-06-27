import React, { useState, useEffect } from "react";
import { Col, Row, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import JobApplicationModal from "../../../components/JobApplicationModal";

import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import { getSimilarVacancies } from "../../../services/vacancyService";
import { translateJobType } from "../../../utils/jobTranslations";

export const formatSalary = (min, max) => {
  if (min >= 1000 || max >= 1000) {
    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k / year`;
  }
  return `$${min} - $${max} / month`;
};

const JobVacancyPost = ({ jobId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [similarJobs, setSimilarJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    const fetchSimilarJobs = async () => {
      try {
        setLoading(true);
        const response = await getSimilarVacancies(jobId);
        setSimilarJobs(response.content);
      } catch (err) {
        setError(err.message || "Failed to load similar jobs");
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchSimilarJobs();
    }
  }, [jobId]);

  if (loading) {
    return (
      <div className="text-center py-4">
        <Spinner color="primary" />
        <p className="mt-2">Loading similar jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4 text-danger">
        <i className="uil uil-exclamation-triangle fs-4"></i>
        <p className="mt-2">{error}</p>
      </div>
    );
  }

  if (similarJobs.length === 0) {
    return (
      <div className="text-center py-4">
        <p>Nenhuma vaga semelhante encontrada</p>
        <Link to="/joblist" className="btn btn-soft-primary mt-2">
          Ver todas as vagas
        </Link>
      </div>
    );
  }

  return (
    <React.Fragment>
      <h5 className="fs-18 my-3">Vagas Similares</h5>

      {similarJobs.map((job, key) => (
        <div key={key} className="job-box card mt-4">
          <div className="p-4">
            <Row>
              <Col lg={1}>
                <Link to={`/company/${job.company.slug}`}>
                  <img
                    src={job.company.logo || jobImage1}
                    alt={job.company.name}
                    className="img-fluid rounded-3"
                  />
                </Link>
              </Col>
              <Col lg={10}>
                <div className="mt-3 mt-lg-0">
                  <h5 className="fs-17 mb-1">
                    <Link to={`/jobdetails/${job.id}`} className="text-dark">
                      {job.title}
                    </Link>{" "}
                    <small className="text-muted fw-normal">
                      ({job.yearsOfExperience || 0}-
                      {job.yearsOfExperience ? job.yearsOfExperience + 2 : 2}{" "}
                      anos de Experiência)
                    </small>
                  </h5>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <p className="text-muted fs-14 mb-0">
                        {job.company.name}
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted fs-14 mb-0">
                        <i className="mdi mdi-map-marker"></i>
                        {job.city || job.country || "Remote"}
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted fs-14 mb-0">
                        <i className="uil uil-wallet"></i>{" "}
                        {job.minSalary && job.maxSalary
                          ? formatSalary(job.minSalary, job.maxSalary)
                          : "Salary negotiable"}
                      </p>
                    </li>
                  </ul>
                  <div className="mt-2">
                    <span
                      className={`badge bg-${
                        job.remoteAllowed ? "success" : "primary"
                      }-subtle text-${
                        job.remoteAllowed ? "success" : "primary"
                      } fs-13 mt-1 mx-1`}
                    >
                      {translateJobType(job.type)}
                    </span>
                    {job.jobCategory && (
                      <span className="badge bg-info-subtle text-info fs-13 mt-1">
                        {job.jobCategory.name}
                      </span>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
            <div className="favorite-icon">
              <Link to="#">
                <i className="uil uil-heart-alt fs-18"></i>
              </Link>
            </div>
          </div>
          <div className="p-3 bg-light">
            <div className="row justify-content-between">
              <Col md={3}>
                <div className="text-md-end">
                  <Link to={`/jobdetails/${job.id}`} className="primary-link">
                    Ver Detalhes{" "}
                    <i className="mdi mdi-chevron-double-right"></i>
                  </Link>
                </div>
              </Col>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        <Link to="/joblist" className="primary-link form-text">
          Ver Todas As Vagas <i className="mdi mdi-arrow-right"></i>
        </Link>
      </div>

      <JobApplicationModal isOpen={modalOpen} toggle={toggleModal} />
    </React.Fragment>
  );
};

export default JobVacancyPost;
