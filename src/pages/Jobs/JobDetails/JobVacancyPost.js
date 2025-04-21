import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

//Job Images
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import JobApplicationModal from "../../../components/JobApplicationModal";

const JobVacancyPost = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const jobVacancyPost = [
    {
      id: 1,
      companyImg: jobImage1,
      jobDescription: "Desenvolvedor HTML",
      experience: "0-2 anos de experiência",
      companyName: "Hireway Technology Pvt.Ltd",
      location: "Califórnia",
      salary: "$250 - $800 / mês",
      fullTime: true,
      timing: "Tempo Integral",
      addclassNameBookmark: true,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-warning-subtle text-warning",
          badgeName: "Urgente",
        },
        {
          id: 2,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Privado",
        },
      ],
    },
    {
      id: 2,
      companyImg: jobImage2,
      jobDescription: "Diretor de Marketing",
      experience: "2-4 anos de experiência",
      companyName: "Creative Agency",
      location: "Nova Iorque",
      salary: "$250 - $800 / mês",
      partTime: true,
      timing: "Tempo Integral",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Privado",
        },
      ],
    },
    {
      id: 3,
      companyImg: jobImage3,
      jobDescription: "Desenvolvedor HTML",
      experience: "2-4 anos de experiência",
      companyName: "Hireway Technology Pvt.Ltd",
      location: "Califórnia",
      salary: "$250 - $800 / mês",
      freeLance: true,
      timing: "Freelancer",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-blue-subtle text-blue",
          badgeName: "Estágio",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      {jobVacancyPost.map((jobVacancyPostDetails, key) => (
        <div
          key={key}
          className={
            jobVacancyPostDetails.addclassNameBookmark === true
              ? "job-box bookmark-post card mt-4"
              : "job-box card mt-4"
          }
        >
          <div className="p-4">
            <Row>
              <Col lg={1}>
                <Link to="/companydetails">
                  <img
                    src={jobVacancyPostDetails.companyImg}
                    alt=""
                    className="img-fluid rounded-3"
                  />
                </Link>
              </Col>
              <Col lg={10}>
                <div className="mt-3 mt-lg-0">
                  <h5 className="fs-17 mb-1">
                    <Link to="/jobdetails" className="text-dark">
                      {jobVacancyPostDetails.jobDescription}
                    </Link>{" "}
                    <small className="text-muted fw-normal">
                      ({jobVacancyPostDetails.experience})
                    </small>
                  </h5>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <p className="text-muted fs-14 mb-0">
                        {jobVacancyPostDetails.companyName}
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted fs-14 mb-0">
                        <i className="mdi mdi-map-marker"></i>
                        {jobVacancyPostDetails.location}
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted fs-14 mb-0">
                        <i className="uil uil-wallet"></i>{" "}
                        {jobVacancyPostDetails.salary}
                      </p>
                    </li>
                  </ul>
                  <div className="mt-2">
                    <span
                      className={
                        jobVacancyPostDetails.fullTime === true
                          ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                          : jobVacancyPostDetails.partTime === true
                          ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                          : jobVacancyPostDetails.freeLance === true
                          ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                          : jobVacancyPostDetails.internship === true
                          ? "badge bg-info-subtle text-info mt-1"
                          : ""
                      }
                    >
                      {jobVacancyPostDetails.timing}
                    </span>
                    {(jobVacancyPostDetails.badges || []).map(
                      (badgeInner, key) => (
                        <span
                          className={`badge ${badgeInner.badgeclassName} fs-13 mt-1`}
                          key={key}
                        >
                          {badgeInner.badgeName}
                        </span>
                      )
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
              <Col md={8}>
                <div>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <i className="uil uil-tag"></i> Palavras Chave:
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="primary-link text-muted">
                        Ui designer
                      </Link>
                      ,
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="primary-link text-muted">
                        developer
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md={3}>
                <div className="text-md-end">
                  <Link
                    to="#applyNow"
                    onClick={toggleModal}
                    className="primary-link"
                  >
                    Inscreva-se <i className="mdi mdi-chevron-double-right"></i>
                  </Link>
                </div>
              </Col>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        <Link to="/joblist" className="primary-link form-text">
          Ver Mais <i className="mdi mdi-arrow-right"></i>
        </Link>
      </div>

      <div
        className="modal fade"
        id="applyNow"
        tabIndex="-1"
        aria-labelledby="applyNow"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <JobApplicationModal isOpen={modalOpen} toggle={toggleModal} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobVacancyPost;
