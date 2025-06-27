import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Section from "../../Jobs/JobList/Section";
import JobSearchOptions from "./JobSearchOptions";
import JobVacancyList from "./JobVacancyList";
import Popular from "./Popular";
import Sidebar from "./Sidebar";

const JobList = () => {
  document.title = "Job List | Recruitment - Job Listing | MobiSolutions";

  const [filters, setFilters] = useState({
    searchQuery: "",
    location: "",
    jobCategory: "",
  });

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    // This will trigger a re-render and JobVacancyList will use the updated filters
    console.log("Applying filters:", {...filters, location: filters.location.label} );
  };

  const populars = [
    {
      id: 1,
      count: 20,
      jobTitle: "Designer UI/UX",
    },
    {
      id: 2,
      count: 18,
      jobTitle: "Gerente de RH",
    },
    {
      id: 3,
      count: 10,
      jobTitle: "Gerente de Vendas",
    },
    {
      id: 4,
      count: 15,
      jobTitle: "Desenvolvedor",
    },
  ];

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
                />
                <Popular populars={populars}/>
                <JobVacancyList filters={filters}/>
              </div>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default JobList;