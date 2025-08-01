import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";
import { getAllVacancies } from "../../../services/vacancyService";

//Images Import
import jobImage1 from "../../../assets/images/light-logo.png";

const JobVacancyList = ({ filters }) => {
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
  });

  // Fetch vacancies query
  const { data, isLoading, error } = useQuery({
    queryKey: ["vacancies", pagination.page, pagination.size, filters],
    queryFn: () =>
      getAllVacancies({
        page: pagination.page,
        size: pagination.size,
        search: filters.searchQuery,
        location: filters.location,
        category: filters.jobCategoryId,
        yearsOfExperience: filters.experienceRange,
        jobType: filters.jobType,
        timePeriod: filters.timePeriod,
      }),
    keepPreviousData: true,
  });

  const { language } = useLanguage();

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < (data?.totalPages || 0)) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPagination((prev) => ({ ...prev, size: newSize, page: 0 }));
  };

  return (
    <>
      <div className="wedget-popular-title mt-4">
        <h6>{language === "pt" ? "Recentes" : "Recent"}</h6>

        {data?.content?.map((vacancy, key) => (
          <div key={key} className="job-box card mt-4">
            <div className="bookmark-label text-center">
              <Link to="#" className="align-middle text-white">
                <i className="mdi mdi-star"></i>
              </Link>
            </div>
            <div className="p-4">
              <Row className="align-items-center">
                <Col md={2}>
                  <div className="text-center mb-4 mb-md-0">
                    <Link to={`/companydetails/${vacancy.company.id}`}>
                      <img
                        src={vacancy.company.logo || jobImage1}
                        alt={vacancy.company.name}
                        className="img-fluid rounded-3"
                      />
                    </Link>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-2 mb-md-0">
                    <h5 className="fs-18 mb-0">
                      <Link
                        to={`/jobdetails/${vacancy.id}`}
                        className="text-dark"
                      >
                        {vacancy.title}
                      </Link>
                    </h5>
                    <p className="text-muted fs-14 mb-0">
                      {vacancy.company.name}
                    </p>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0">
                      <i className="mdi mdi-map-marker text-primary me-1"></i>
                    </div>
                    {(vacancy.city || vacancy.state || vacancy.country) && (
                      <p className="text-muted mb-0">
                        {[vacancy.city, vacancy.state, vacancy.country]
                          .filter(Boolean)
                          .join(", ")}
                      </p>
                    )}
                  </div>
                </Col>

                <Col md={2}>
                  <div className="d-flex mb-0">
                    <div className="flex-shrink-0">
                      <i className="uil uil-clock-three text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {new Date(vacancy.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div>
                    <span
                      className={
                        vacancy.type === "FULL_TIME"
                          ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                          : vacancy.type === "PART_TIME"
                          ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                          : vacancy.type === "CONTRACT"
                          ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                          : "badge bg-info-subtle text-info mt-1"
                      }
                    >
                      {vacancy.type === "FULL_TIME"
                        ? "Tempo Integral"
                        : vacancy.type === "PART_TIME"
                        ? "Meio Período"
                        : vacancy.type === "CONTRACT"
                        ? "Contrato"
                        : "Estágio"}
                    </span>
                    {
                      <span
                        className={
                          vacancy.status === "ACTIVE"
                            ? "badge bg-success-subtle text-success fs-13 mt-1"
                            : vacancy.status === "CLOSED"
                            ? "badge bg-danger-subtle text-danger fs-13 mt-1"
                            : "badge bg-warning-subtle text-warning fs-13 mt-1"
                        }
                      >
                        {vacancy.status === "ACTIVE"
                          ? "Activa"
                          : vacancy.status === "CLOSED"
                          ? "Fechada"
                          : "Pendente"}
                      </span>
                    }
                  </div>
                </Col>
              </Row>
            </div>
            <div className="p-3 bg-light">
              <Row className="justify-content-between">
                <Col md={4}>
                  <div>
                    <p className="text-muted mb-0">
                      <span className="text-dark">
                        {language === "pt" ? "Experiência" : "Experience"}:{" "}
                      </span>
                      {vacancy.yearsOfExperience}{" "}
                      {language === "pt" ? "anos" : "years"}
                    </p>
                  </div>
                </Col>
                <Col lg={2} md={3}>
                  <div>
                    <Link
                      to={`/jobdetails/${vacancy.id}`}
                      className="primary-link"
                    >
                      {language === "pt" ? "Inscreva-se" : "Sign up"}{" "}
                      <i className="mdi mdi-chevron-double-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="text-muted">
            {language === "pt" ? "Mostrando" : "Showing"}{" "}
            <span className="fw-bold">{data?.content?.length || 0}</span>{" "}
            {language === "pt" ? "de" : "of"}{" "}
            <span className="fw-bold">{data?.totalElements || 0}</span>{" "}
            {language === "pt" ? "vagas" : "vacancies"}
            <select
              className="form-select form-select-sm ms-2 d-inline-block w-auto"
              value={pagination.size}
              onChange={handlePageSizeChange}
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size} {language === "pt" ? "por página" : "per page"}
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
      </div>
    </>
  );
};

export default JobVacancyList;
