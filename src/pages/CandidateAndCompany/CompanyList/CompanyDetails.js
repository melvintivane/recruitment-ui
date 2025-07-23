import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink, Row } from "reactstrap";
import { getJobCategories } from "../../../services/blogService";
import { getAllEmployers } from "../../../services/companyService";
import CompanySearchOptions from "../CompanyList/CompanySearchOptions";


//Import Job Images
import jobImage1 from "../../../assets/images/featured-job/img-01.png";

import { useLanguage } from "../../../context/LanguageContext";

const CompanyDetails = () => {



  const initialFilters = {
    searchQuery: "",
    location: "",
    industry: "",
    experienceRange: null,
    type: null,
    createdAt: null,
  };

  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
  });


  // Fetch employers query
  const { data, isLoading, error } = useQuery({
    queryKey: ["employers", pagination.page, pagination.size],
    queryFn: () =>
      getAllEmployers({
        page: pagination.page,
        size: pagination.size,
      }),
    keepPreviousData: true,
  });

  // Fetch industry  query

  const industryData = [...new Set(data?.content?.map(e => e.industry))]
  .filter(Boolean)
  .map(industry => ({
    value: industry.toLowerCase().replace(/\s+/g, '-'),
    label: industry
  }));

  const [filters, setFilters] = useState(initialFilters);

  const { data: categoriesData, } = useQuery({
    queryKey: ["jobCategories"],
    queryFn: getJobCategories,
    select: (data) =>
      data.content.map((category) => ({
        value: category.id,
        label: category.name,
      })),
    staleTime: 60 * 60 * 1000, // 1 hora de cache
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // API call or state update that triggers JobVacancyList refresh
    setFilters({
      searchQuery: "",
      location: "",
      industry: "",
      experienceRange: null,
      type: null,
      createdAt: null,
    });
  };

  const { language } = useLanguage();

  /*const companyDetails = [
    {
      id: 1,
      jobImg: jobImage1,
      compnayName: "Recruitment Consulting",
      location: "New York",
      numberOfVacancy: 52,
      label: true,
      labelRating: 4.9,
    },
    {
      id: 2,
      jobImg: jobImage2,
      compnayName: "Creative Agency",
      location: "UK",
      numberOfVacancy: 11,
      label: false,
      labelRating: null,
    },
    {
      id: 3,
      jobImg: jobImage3,
      compnayName: "DootTech Solution",
      location: "London",
      numberOfVacancy: "09",
      label: false,
      labelRating: null,
    },
    {
      id: 4,
      jobImg: jobImage5,
      compnayName: "Apple School & College",
      location: "Canada",
      numberOfVacancy: 27,
      label: false,
      labelRating: null,
    },
    {
      id: 5,
      jobImg: jobImage6,
      compnayName: "Hunter Hospital",
      location: "America",
      numberOfVacancy: "07",
      label: true,
      labelRating: 4.8,
    },
    {
      id: 6,
      jobImg: jobImage7,
      compnayName: "Jshop Agency",
      location: "California",
      numberOfVacancy: 20,
      label: false,
      labelRating: null,
    },
    {
      id: 7,
      jobImg: jobImage8,
      compnayName: "Adobe Agency",
      location: "New York",
      numberOfVacancy: 27,
      label: false,
      labelRating: null,
    },
    {
      id: 8,
      jobImg: jobImage9,
      compnayName: "Creative Agency",
      location: "Uk",
      numberOfVacancy: 35,
      label: false,
      labelRating: null,
    },
    {
      id: 9,
      jobImg: jobImage10,
      compnayName: "Kshop Agency",
      location: "America",
      numberOfVacancy: 14,
      label: true,
      labelRating: 3.0,
    },
  ];*/

  
  

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
    return <div>Loading employers...</div>;
  }

  if (error) {
    return <div className="text-danger">Error: {error.message}</div>;
  }



  return (
    <React.Fragment>
      <Row className="align-items-center mb-4">
        {/*<Col lg={8}>
          <div className="mb-3 mb-lg-0">
            <h6 className="fs-16 mb-0">
              {language === 'pt' ? `Exibindo ${1} - ${8} de ${11} resultados` : `Showing ${1} - ${8} of ${11} results`}
            </h6>
          </div>
        </Col>*/}
        <Col lg={9}>
          <div className="me-lg-5">

            <CompanySearchOptions
              filters={filters}
              onFilterChange={handleFilterChange}
              onSearch={handleSearch}
              industryData={industryData || []}
              isLoading={isLoading}
            />
          </div>
        </Col>

        <Col lg={3}>
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
                <img
                  src={jobImage1}
                  alt=""
                  className="img-fluid rounded-3"
                />
                <div className="mt-4">
                  <Link to={`/companydetails/${companyDetails.id}`} className="primary-link">
                    <h6 className="fs-18 mb-2">
                      {companyDetails.name}
                    </h6>
                  </Link>
                  <p className="text-muted mb-4">
                    {companyDetails.country}{"-"}{companyDetails.city}
                  </p>
                  <Link to="/companydetails" className="btn btn-primary">
                    {companyDetails.numberOfVacancy} {language === 'pt' ? "Vagas abertas" : "Open vacancies"}
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
            {language === 'pt' ? "Mostrando" : "Showing"}{" "}
            <span className="fw-bold">{data?.content?.length || 0}</span> {language === 'pt' ? "de" : "of"}{" "}
            <span className="fw-bold">{data?.totalElements || 0}</span> {language === 'pt' ? "empresas" : "companies"}
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

export default CompanyDetails;
