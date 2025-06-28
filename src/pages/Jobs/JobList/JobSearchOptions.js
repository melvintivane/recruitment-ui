import { Col, Form } from "react-bootstrap";
import { Input, Row } from "reactstrap";
import CountryOptions from "../../Home/SubSection/CountryOptions";
import JobType from "../../Home/SubSection/JobType";
import { getJobCategories } from "../../../services/vacancyService";
import { useQuery } from "react-query";

const JobSearchOptions = ({ filters, onFilterChange, onSearch }) => {
  const {
    data: categoriesData,
    isLoading,
    // error,
  } = useQuery({
    queryKey: ["jobCategories"],
    queryFn: getJobCategories,
    select: (data) =>
      data.content.map((category) => ({
        value: category.id,
        label: category.name,
      })),
    staleTime: 60 * 60 * 1000, // 1 hora de cache
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="job-list-header">
      <Form onSubmit={handleSubmit}>
        <Row className="g-2">
          <Col lg={3} md={6}>
            <div className="filler-job-form">
              <i className="uil uil-briefcase-alt"></i>
              <Input
                type="search"
                name="searchQuery"
                value={filters.searchQuery}
                onChange={handleInputChange}
                className="form-control filter-input-box"
                placeholder="Emprego, etc..."
                style={{ marginTop: "-10px" }}
              />
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="filler-job-form">
              <i className="uil uil-location-point"></i>
              <CountryOptions
                value={filters.location}
                onChange={(value) => onFilterChange("location", value)}
              />
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="filler-job-form">
              <i className="uil uil-clipboard-notes"></i>
              <JobType
                loading={isLoading}
                options={categoriesData || []} // Fallback para array vazio
                value={filters.jobCategoryId}
                onChange={(value) => onFilterChange("jobCategoryId", value)}
              />
            </div>
          </Col>
          <Col lg={3} md={6}>
            <button type="submit" className="btn btn-primary w-100">
              <i className="uil uil-filter"></i> Filtrar
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default JobSearchOptions;
