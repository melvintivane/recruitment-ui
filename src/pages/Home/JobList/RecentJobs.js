import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { getAllVacancies } from "../../../services/vacancyService";

//jobImages
import jobImage4 from "../../../assets/images/featured-job/img-04.png";
import JobApplicationModal from "../../../components/JobApplicationModal";
import { useLanguage } from "../../../context/LanguageContext";

const RecentJobs = () => {
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const [pagination, setPagination] = useState({
    page: 0,
    size: 4,
  });

  // Fetch vacancies query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["vacancies", pagination.page, pagination.size],
    queryFn: () =>
      getAllVacancies({
        page: pagination.page,
        size: pagination.size,
        /*search: filters.searchQuery,
        location: filters.location,
        category: filters.jobCategoryId,
        yearsOfExperience: filters.experienceRange,
        jobType: filters.jobType,
        timePeriod: filters.timePeriod,*/
      }),
    keepPreviousData: true,
  });

  if (isLoading) {
    return (
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
            ? "Carregando lista de vagas..."
            : "Loading vacancy list..."}
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-5">
        <p className="mt-3 text-danger">
          {language === "pt"
            ? "Erro ao carregar lista de vagas"
            : "Error loading vacancy list"}
        </p>
      </div>
    );
  }

  return (
    <React.Fragment>
      {data?.content?.map((recentJobDetails, key) => (
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
                  <Link to={`/companydetails/${recentJobDetails.company.id}`}>
                    <img
                      src={recentJobDetails.picture || jobImage4}
                      alt=""
                      className="img-fluid rounded-3"
                    />
                  </Link>
                </div>
              </Col>

              <Col md={3}>
                <div className="mb-2 mb-md-0">
                  <h5 className="fs-18 mb-1">
                    <Link
                      to={`/jobdetails/${recentJobDetails.id}`}
                      className="text-dark"
                    >
                      {recentJobDetails.title}
                    </Link>
                  </h5>
                  <p className="text-muted fs-14 mb-0">
                    {recentJobDetails.company.name}
                  </p>
                </div>
              </Col>

              <Col md={3}>
                <div className="d-flex mb-2">
                  <div className="flex-shrink-0">
                    <i className="mdi mdi-map-marker text-primary me-1"></i>
                  </div>
                  <p className="text-muted mb-0">
                    {recentJobDetails.location || language === "pt"
                      ? "Maputo,Moçambique"
                      : "Maputo,Mozambique"}
                  </p>
                </div>
              </Col>

              <Col md={2}>
                <div>
                  <p className="text-muted mb-2">
                    <span className="text-primary">$</span>
                    {recentJobDetails.minSalary}-{recentJobDetails.maxSalary}/m
                  </p>
                </div>
              </Col>

              <Col md={2}>
                <div>
                  <span
                    className={
                      recentJobDetails.type === "FULL_TIME"
                        ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                        : recentJobDetails.type === "PART_TIME"
                        ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                        : recentJobDetails.type === "FREELANCE"
                        ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                        : ""
                    }
                  >
                    {recentJobDetails.type}
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
                    <span className="text-dark">
                      {language === "pt" ? "Experiência" : "Experience"}:{" "}
                    </span>{" "}
                    {recentJobDetails.yearsOfExperience || "N/A"}{" "}
                    {recentJobDetails.yearsOfExperience
                      ? language === "pt"
                        ? "anos"
                        : "years"
                      : ""}
                  </p>
                </div>
              </Col>

              <Col lg={6} md={5}>
                {}
                {/*<div>
                  <p className="text-muted mb-0">
                    <span className="text-dark">
                      {recentJobDetails.Notes === null ? "" : language === 'pt' ? "Notas:" : "Notes:"}
                    </span>
                    {recentJobDetails.Notes}{" "}
                  </p>
                </div>*/}
              </Col>

              <Col lg={2} md={3}>
                <div className="text-start text-md-end">
                  <Link to="#" onClick={toggleModal} className="primary-link">
                    {language === "pt" ? "Inscreva-se" : "Sign up"}{" "}
                    <i className="mdi mdi-chevron-double-right"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ))}
      <div className="text-center mt-4 pt-2">
        <Link to="/joblist" className="btn btn-primary">
          {language === "pt" ? "Ver Mais" : "See More"}{" "}
          <i className="uil uil-arrow-right"></i>
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
