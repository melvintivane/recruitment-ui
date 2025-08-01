import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Section from "../../Jobs/JobList/Section";
import JobSearchOptions from "./JobSearchOptions";
import JobVacancyList from "./JobVacancyList";
import Sidebar from "./Sidebar";
import { useQuery } from "react-query";
import { getJobCategories } from "../../../services/vacancyService";
import { useLanguage } from "../../../context/LanguageContext";

const JobList = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Lista de Vagas" : "Vacancy List";

  const initialFilters = {
    searchQuery: "",
    location: "",
    jobCategoryId: 0,
    experienceRange: null,
    jobType: null,
    timePeriod: null,
  };

  const [filters, setFilters] = useState(initialFilters);

  const { data: categoriesData, isLoading, isError } = useQuery({
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
      jobCategoryId: "",
      experienceRange: null,
      jobType: null,
      timePeriod: null,
    });
  };

  if (isLoading) {
    return (
      <>
        <Section />
        <section className="section">
          <Container>
            <div className="text-center py-5">
              <div
                className="spinner-grow text-primary"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">{language === "pt" ? "Carregando..." : "Loading..."}</span>
              </div>
              <p className="mt-3">{language === "pt" ? "Carregando lista de vagas..." : "Loading vacancy list..."}</p>
            </div>
          </Container>
        </section>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Section />
        <section className="section">
          <Container>
            <div className="text-center py-5">
              <p className="mt-3 text-danger">
                {language === "pt" ? "Erro ao carregar lista de vagas" : "Error loading vacancy list"}
              </p>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="me-lg-5">
                <JobSearchOptions
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onSearch={handleSearch}
                  categoriesData={categoriesData || []}
                  isLoading={isLoading}
                />
                <JobVacancyList
                  filters={{
                    searchQuery: filters.searchQuery,
                    location: filters.location?.label || "",
                    jobCategoryId: filters.jobCategoryId,
                    experienceRange: filters.experienceRange,
                    jobType: filters.jobType,
                    timePeriod: filters.timePeriod
                  }}
                />
              </div>
            </Col>
            <Sidebar filters={filters} onFilterChange={handleFilterChange} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default JobList;
