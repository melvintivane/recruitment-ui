import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

//jobImages
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";
import JobApplicationModal from "../../../components/JobApplicationModal";

const RecentJobs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const recentJob = [
    {
      id: 1,
      companyImg: jobImage1,
      jobDescription: "Desenvolvedor Web",
      companyName: "Web Technology pvt.Ltd",
      location: "Oakridge Lane ssRichardson",
      salary: "1000-1200/m",
      fullTime: true,
      timing: "Tempo Integral",
      category: "Vagas Recentes",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Privado",
        },
      ],
      experience: "1 - 2 anos",
      Notes: "As línguas só diferem em sua gramática.",
    },
    {
      id: 2,
      companyImg: jobImage2,
      jobDescription: "Associado de Negócios",
      companyName: "Pixel Technology pvt.Ltd",
      location: "Dodge City, Louisiana",
      salary: "800-1800/m",
      partTime: true,
      timing: "Meio Período",
      category: "Vagas Recentes",
      addclassNameBookmark: true,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Privado",
        },
        {
          id: 2,
          badgeclassName: "bg-warning-subtle text-warning",
          badgeName: "Urgente",
        },
      ],
      experience: "0 - 1 ano",
      Notes: "As línguas só diferem em sua gramática.",
    },
    {
      id: 3,
      companyImg: jobImage3,
      jobDescription: "Gerente de Marketing Digital",
      companyName: "Hireway Technology Pvt.Ltd",
      location: "Phoenix, Arizona",
      salary: "1500-2400/m",
      freelancer: true,
      timing: "Freelancer",
      category: "Vagas Recentes",
      addclassNameBookmark: true,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Privado",
        },
      ],
      experience: "0 - 1 ano",
      Notes: null,
    },
    {
      id: 4,
      companyImg: jobImage4,
      jobDescription: "Diretor de Produto",
      companyName: "Creative Agency",
      location: "Escondido, Califórnia",
      salary: "1500-2400/m",
      fullTime: true,
      timing: "Tempo Integral",
      category: "Vagas Recentes",
      badges: [
        {
          id: 1,
          badgeclassName: "bg-warning-subtle text-warning",
          badgeName: "Urgente",
        },
      ],
      experience: "0 - 1 ano",
      Notes: null,
    },
  ];

  return (
    <React.Fragment>
      {recentJob.map((recentJobDetails, key) => (
        <div
          key={key}
          className={
            recentJobDetails.addclassNameBookmark === true
              ? "job-box bookmark-post card mt-4"
              : "job-box card mt-4"
          }
        >
          <div className="bookmark-label text-center">
            <Link to="#" className="text-white align-middle">
              <i className="mdi mdi-star"></i>
            </Link>
          </div>
          <div className="p-4">
            <Row className="align-items-center">
              <Col md={2}>
                <div className="text-center mb-4 mb-md-0">
                  <Link to="/companydetails">
                    <img
                      src={recentJobDetails.companyImg}
                      alt=""
                      className="img-fluid rounded-3"
                    />
                  </Link>
                </div>
              </Col>

              <Col md={3}>
                <div className="mb-2 mb-md-0">
                  <h5 className="fs-18 mb-1">
                    <Link to="/jobdetails" className="text-dark">
                      {recentJobDetails.jobDescription}
                    </Link>
                  </h5>
                  <p className="text-muted fs-14 mb-0">
                    {recentJobDetails.companyName}
                  </p>
                </div>
              </Col>

              <Col md={3}>
                <div className="d-flex mb-2">
                  <div className="flex-shrink-0">
                    <i className="mdi mdi-map-marker text-primary me-1"></i>
                  </div>
                  <p className="text-muted mb-0">{recentJobDetails.location}</p>
                </div>
              </Col>

              <Col md={2}>
                <div>
                  <p className="text-muted mb-2">
                    <span className="text-primary">$</span>
                    {recentJobDetails.salary}
                  </p>
                </div>
              </Col>

              <Col md={2}>
                <div>
                  <span
                    className={
                      recentJobDetails.fullTime === true
                        ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                        : recentJobDetails.partTime === true
                        ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                        : recentJobDetails.freelancer === true
                        ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                        : ""
                    }
                  >
                    {recentJobDetails.timing}
                  </span>

                  {(recentJobDetails.badges || []).map((badgeInner, key) => (
                    <span
                      className={
                        "badge " + badgeInner.badgeclassName + " fs-13 mt-1"
                      }
                      key={key}
                    >
                      {badgeInner.badgeName}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
          <div className="p-3 bg-light">
            <Row>
              <Col md={4}>
                <div>
                  <p className="text-muted mb-0">
                    <span className="text-dark">Experiência: </span>{" "}
                    {recentJobDetails.experience}
                  </p>
                </div>
              </Col>

              <Col lg={6} md={5}>
                {}
                <div>
                  <p className="text-muted mb-0">
                    <span className="text-dark">
                      {recentJobDetails.Notes === null ? "" : "Notas: "}
                    </span>
                    {recentJobDetails.Notes}{" "}
                  </p>
                </div>
              </Col>

              <Col lg={2} md={3}>
                <div className="text-start text-md-end">
                  <Link to="#" onClick={toggleModal} className="primary-link">
                    Inscreva-se <i className="mdi mdi-chevron-double-right"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ))}
      <div className="text-center mt-4 pt-2">
        <Link to="/joblist" className="btn btn-primary">
          Ver Mais <i className="uil uil-arrow-right"></i>
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

export default RecentJobs;
