import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { CardBody, Col, Pagination, PaginationItem, PaginationLink, Row } from "reactstrap";
import { getAllCandidates } from "../../../services/candidateService";


//Import images
import userImage1 from "../../../assets/images/user/img-01.jpg";
import { useLanguage } from "../../../context/LanguageContext";

const CandidateDetails = () => {
  const { language } = useLanguage();

  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
  });

  // Fetch vacancies query
  const { data, isLoading, error } = useQuery({
    queryKey: ["vacancies", pagination.page, pagination.size],
    queryFn: () =>
      getAllCandidates({
        page: pagination.page,
        size: pagination.size,
      }),
    keepPreviousData: true,
  });

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < (data?.totalPages || 0)) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPagination((prev) => ({ ...prev, size: newSize, page: 0 }));
  };

  if (isLoading) {
    return <div>Loading vacancies...</div>;
  }

  if (error) {
    return <div className="text-danger">Error: {error.message}</div>;
  }
  /*const candidateDetails = [
    {
      id: 1,
      userImg: userImage1,
      candidateName: "Charles Dickens",
      candidateDesignation: "Project Manager",
      location: "Oakridge Lane Richardson",
      salary: "$650 / hours",
      rating: 4.8,
      ratingClass: "badge bg-success ms-1",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeName: "Leader",
          classname: "success"
        },
        {
          id: 2,
          badgeName: "Manager",
          classname: "primary"
        },
        {
          id: 2,
          badgeName: "Developer",
          classname: "warning"
        }
      ]
    },
    {
      id: 2,
      userImg: userImage2,
      candidateName: "Gabriel Palmer",
      candidateDesignation: "HTML Developer",
      location: "Oakridge Lane California",
      salary: "$250 / hours",
      rating: 3.4,
      ratingClass: "badge bg-warning ms-1",
      addclassNameBookmark: true,
      badges: [
        {
          id: 1,
          badgeName: "Design",
          classname: "info"
        },
        {
          id: 2,
          badgeName: "Developer",
          classname: "primary"
        }
      ]
    },
    {
      id: 3,
      userImg: userImage3,
      candidateName: "Rebecca Swartz ",
      candidateDesignation: "Graphic Designer",
      location: "Oakridge Lane Richardson",
      salary: "$380 / hours",
      rating: 4.3,
      ratingClass: "badge bg-success ms-1",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeName: "Design",
          classname: "success"
        },
        {
          id: 2,
          badgeName: "Developer",
          classname: "primary"
        }
      ]
    },
    {
      id: 4,
      userImg: userImage4,
      candidateName: "Betty Richards",
      candidateDesignation: "Education Training",
      location: "Oakridge Lane Richardson",
      salary: "$650 / hours",
      rating: 4.5,
      ratingClass: "badge bg-success ms-1",
      addclassNameBookmark: true,
      badges: [
        {
          id: 1,
          badgeName: "Trainer",
          classname: "warning"
        },
        {
          id: 2,
          badgeName: "Adobe illustrator",
          classname: "info"
        }
      ]
    },
    {
      id: 5,
      userImg: userImage5,
      candidateName: "Jeffrey Montgomery",
      candidateDesignation: "Restaurant Team Member",
      location: "Oakridge Lane Richardson",
      salary: "$125 / hours",
      rating: 4.9,
      ratingClass: "badge bg-success ms-1",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeName: "Trainer",
          classname: "primary"
        },
        {
          id: 2,
          badgeName: "Adobe illustrator",
          classname: "warning"
        }
      ]
    },
    {
      id: 6,
      userImg: userImage6,
      candidateName: "Milton Osborn",
      candidateDesignation: "Assistant / Store Keeper",
      location: "Oakridge Lane Richardson",
      salary: "$455 / hours",
      rating: 2.5,
      ratingClass: "badge bg-danger ms-1",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeName: "Trainer",
          classname: "info"
        },
        {
          id: 2,
          badgeName: "Adobe illustrator",
          classname: "primary"
        }
      ]
    },
    {
      id: 7,
      userImg: userImage7,
      candidateName: "Harold Jordan",
      candidateDesignation: "Executive, HR Operations",
      location: "Oakridge Lane Richardson",
      salary: "$799 / hours",
      rating: 4.9,
      ratingClass: "badge bg-success ms-1",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeName: "Trainer",
          classname: "success"
        },
        {
          id: 2,
          badgeName: "Adobe illustrator",
          classname: "primary"
        }
      ]
    },
    {
      id: 8,
      userImg: userImage8,
      candidateName: "MichaeL Drake ",
      candidateDesignation: "Full Stack Engineer",
      location: "Oakridge Lane Richardson",
      salary: "$240 / hours",
      rating: 3.9,
      ratingClass: "badge bg-warning ms-1",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeName: "Trainer",
          classname: "info"
        },
        {
          id: 2,
          badgeName: "Adobe illustrator",
          classname: "warning"
        }
      ]
    }
  ];*/
  return (
    <React.Fragment>
      <Row className="align-items-center">
        {/*<Col lg={8}>
          <div className="mb-3 mb-lg-0">
            <h6 className="fs-16 mb-0"> {language === 'pt' ? `Mostrando ${1} - ${8} de ${11} resultados` : `Showing ${1} – ${8} of ${11} results`}  </h6>
          </div>
        </Col>*/}

        <Col lg={4}>
          <div className="candidate-list-widgets">
            <Row>
              <Col lg={6}>
                <div className="selection-widget">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-single-filter-orderby"
                    id="choices-single-filter-orderby"
                    aria-label="Default select example"
                  >
                    <option value="df">{language === 'pt' ? "Padrão" : "Default"}</option>
                    <option value="ne">{language === 'pt' ? "Mais recentes" : "Newest"}</option>
                    <option value="od">{language === 'pt' ? "Mais antigos" : "Oldest"}</option>
                    <option value="rd">{language === 'pt' ? "Aleatório" : "Random"}</option>
                  </select>
                </div>
              </Col>
              <Col lg={6}>
                <div className="selection-widget mt-2 mt-lg-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-candidate-page"
                    id="choices-candidate-page"
                    aria-label="Default select example"
                  >
                    <option value="df">{language === 'pt' ? "Todos" : "All"}</option>
                    <option value="ne">{language === 'pt' ? `${8} por página` : `${8} per page`}</option>
                    <option value="ne">{language === 'pt' ? `${12} por página` : `${12} per page`}</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="candidate-list">
        {data?.content?.map((candidateDetails, key) => (
          <div
            key={key}
            className={
              candidateDetails.addclassNameBookmark === true
                ? "candidate-list-box bookmark-post card mt-4"
                : "candidate-list-box card mt-4"
            }
          >
            <CardBody className="p-4">
              <Row className="align-items-center">
                <div className="col-auto">
                  <div className="candidate-list-images">
                    <Link to={`/candidatedetails/${candidateDetails.id}`} >
                      <img
                        src={candidateDetails.picture || userImage1}
                        alt=""
                        className="avatar-md img-thumbnail rounded-circle"
                      />
                    </Link>
                  </div>
                </div>
                <Col lg={5}>
                  <div className="candidate-list-content mt-3 mt-lg-0">
                    <h5 className="fs-19 mb-0">
                      <Link to={`/candidatedetails/${candidateDetails.id}`} className="primary-link">
                        {candidateDetails.user.firstName} {candidateDetails.user.lastName}
                      </Link>

                      {/*<span className={candidateDetails.ratingClass}>
                        <i className="mdi mdi-star align-middle"></i>
                        {candidateDetails.rating}
                      </span>*/}
                    </h5>
                    <p className="text-muted mb-2">
                      {" "}
                      {candidateDetails.desiredJobCategory}
                    </p>
                    <ul className="list-inline mb-0 text-muted">
                      <li className="list-inline-item">
                        <i className="mdi mdi-map-marker"></i>{" "}
                        {candidateDetails.city} {candidateDetails.country}
                      </li>
                      <li className="list-inline-item">
                        {candidateDetails.desiredSalary && (
                          <i className="uil uil-wallet"></i>
                        )}
                        {candidateDetails.desiredSalary || ""}
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
                    {(candidateDetails.badges || []).map(
                      (badgesInner, key) => (
                        <span
                          className={`badge bg-${badgesInner.classname}-subtle text-${badgesInner.classname} fs-14 mt-1`}
                          key={key}
                        >
                          {badgesInner.badgeName}
                        </span>
                      )
                    )}
                  </div>
                </Col>
              </Row>

              {/*<div className="favorite-icon">
                <Link to="#">
                  <i className="uil uil-heart-alt fs-18"></i>
                </Link>
              </div>*/}
            </CardBody>
          </div>
        ))}
      </div>
      <Row>
        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="text-muted">
            {language === 'pt' ? "Mostrando" : "Showing"}{" "}
            <span className="fw-bold">{data?.content?.length || 0}</span> {language === 'pt' ? "de" : "of"}{" "}
            <span className="fw-bold">{data?.totalElements || 0}</span> {"blogs"}
            <select
              className="form-select form-select-sm ms-2 d-inline-block w-auto"
              value={pagination.size}
              onChange={handlePageSizeChange}
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size} {language === 'pt' ? "por página" : "per page"}
                </option>
              ))}
            </select>
          </div>

          <nav aria-label="Page navigation">
            <Pagination className="mb-0">
              <PaginationItem disabled={pagination.page === 0}>
                <PaginationLink
                  previous
                  onClick={() => handlePageChange(pagination.page - 1)}
                />
              </PaginationItem>

              {Array.from(
                { length: Math.min(5, data?.totalPages || 0) },
                (_, i) => {
                  let pageNum;
                  if ((data?.totalPages || 0) <= 5) {
                    pageNum = i;
                  } else if (pagination.page <= 2) {
                    pageNum = i;
                  } else if (pagination.page >= (data?.totalPages || 0) - 3) {
                    pageNum = (data?.totalPages || 0) - 5 + i;
                  } else {
                    pageNum = pagination.page - 2 + i;
                  }

                  return (
                    <PaginationItem
                      key={pageNum}
                      active={pageNum === pagination.page}
                    >
                      <PaginationLink onClick={() => handlePageChange(pageNum)}>
                        {pageNum + 1}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
              )}

              <PaginationItem
                disabled={pagination.page === (data?.totalPages || 0) - 1}
              >
                <PaginationLink
                  next
                  onClick={() => handlePageChange(pagination.page + 1)}
                />
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
      </Row>
    </React.Fragment>
  );
};

export default CandidateDetails;
