import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Section from "../../Jobs/JobList/Section";
import JobSearchOptions from "./JobSearchOptions";
import JobVacancyList from "./JobVacancyList";
// import Popular from "./Popular";
import Sidebar from "./Sidebar";
import { useQuery } from "react-query";
import { getJobCategories } from "../../../services/vacancyService";

const JobList = () => {
  document.title = "Listagem de Vagas";

  const initialFilters = {
    searchQuery: "",
    location: "",
    jobCategoryId: 0,
    experienceRange: null,
    jobType: null,
    timePeriod: null,
  };

  const [filters, setFilters] = useState(initialFilters);

  const { data: categoriesData, isLoading } = useQuery({
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

  // const populars = [
  //   {
  //     id: 1,
  //     count: 20,
  //     jobTitle: "Designer UI/UX",
  //   },
  //   {
  //     id: 2,
  //     count: 18,
  //     jobTitle: "Gerente de RH",
  //   },
  //   {
  //     id: 3,
  //     count: 10,
  //     jobTitle: "Gerente de Vendas",
  //   },
  //   {
  //     id: 4,
  //     count: 15,
  //     jobTitle: "Desenvolvedor",
  //   },
  // ];

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
                {/* <Popular populars={populars} /> */}
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
