import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import { getAllEmployers } from "../../../services/companyService";

import jobImage1 from "../../../assets/images/featured-job/img-01.png";

import { useLanguage } from "../../../context/LanguageContext";

const CompanyDetails = () => {
  const { language } = useLanguage();

  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["employers", pagination.page, pagination.size],
    queryFn: () =>
      getAllEmployers({
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
            ? "Carregando lista de empresas..."
            : "Loading company list..."}
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-5">
        <p className="mt-3 text-danger">
          {language === "pt"
            ? "Erro ao carregar a lista de empresas"
            : "Error loading company list"}
        </p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Row className="align-items-center mb-4">
        <Col lg={8}>
          <div className="mb-3 mb-lg-0">
            <h6 className="fs-16 mb-0">
              {language === "pt" ? "Empresas" : "Companies"}
            </h6>
          </div>
        </Col>
      </Row>

      <Row>
        {data?.content?.map((companyDetails, key) => (
          <Col lg={4} md={6} key={key}>
            <Card className="text-center mb-4">
              <CardBody className="px-4 py-5">
                {companyDetails.label && (
                  <div className="featured-label">
                    <span className="featured">
                      {companyDetails.labelRating}{" "}
                      <i className="mdi mdi-star-outline"></i>
                    </span>
                  </div>
                )}
                <img src={jobImage1} alt="" className="img-fluid rounded-3" />
                <div className="mt-4">
                  <Link
                    // to={`/companydetails/${companyDetails.id}`}
                    to="#"
                    className="primary-link"
                  >
                    <h6 className="fs-18 mb-2">{companyDetails.name}</h6>
                  </Link>
                  <p className="text-muted mb-4">
                    {companyDetails.country}
                    {"-"}
                    {companyDetails.city}
                  </p>
                  <Link to="/joblist" className="btn btn-primary">
                    {companyDetails.jobCount}{" "}
                    {language === "pt" ? "Vagas abertas" : "Open vacancies"}
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="text-muted">
            {language === "pt" ? "Mostrando" : "Showing"}{" "}
            <span className="fw-bold">{data?.content?.length || 0}</span>{" "}
            {language === "pt" ? "de" : "of"}{" "}
            <span className="fw-bold">{data?.totalElements || 0}</span>{" "}
            {language === "pt" ? "empresas" : "companies"}
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
      </Row>
    </React.Fragment>
  );
};

export default CompanyDetails;
