import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
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
  const toggleModal = () => setModalOpen(!modalOpen);

  const {
    data: similarJobs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["similarJobs", jobId],
    queryFn: () => getSimilarVacancies(jobId),
    select: (data) => data.content,
    enabled: !!jobId, // Only fetch when jobId is available
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });

  // Apply for job mutation
  // const applyMutation = useMutation({
  //   mutationFn: (applicationData) =>
  //     applyForJob(selectedJob.id, applicationData),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["vacancies"]);
  //     setModal(false);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       message: "",
  //       resume: null,
  //     });
  //     // Show success notification
  //     alert("Application submitted successfully!");
  //   },
  //   onError: (error) => {
  //     alert(`Error submitting application: ${error.message}`);
  //   },
  // });

  if (isLoading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading similar jobs...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-4 text-danger">
        <i className="uil uil-exclamation-triangle fs-4"></i>
        <p className="mt-2">{error.message || "Failed to load similar jobs"}</p>
      </div>
    );
  }

  if (similarJobs.length === 0) {
    return (
      <div className="text-center py-4">
        <p>No similar jobs found</p>
        <Link to="/joblist" className="btn btn-soft-primary mt-2">
          View all jobs
        </Link>
      </div>
    );
  }

  return (
    <React.Fragment>
      <h5 className="fs-18 my-3">Similar Vacancies</h5>

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
                      years experience)
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
                    View Details{" "}
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
          View All Jobs <i className="mdi mdi-arrow-right"></i>
        </Link>
      </div>

      <JobApplicationModal isOpen={modalOpen} toggle={toggleModal} />
    </React.Fragment>
  );
};

export default JobVacancyPost;
