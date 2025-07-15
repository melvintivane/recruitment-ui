import { Col, Form } from "react-bootstrap";
import { Input, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";
import CountryOptions from "../../Home/SubSection/CountryOptions";
import JobType from "../../Home/SubSection/JobType";

const JobSearchOptions = ({ 
  filters, 
  onFilterChange, 
  onSearch,
  categoriesData = [],
  isLoading = false 
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  const {language} = useLanguage();

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
                placeholder={language === 'pt' ? "Título, descrição, etc..." : "Title, description, etc..."}
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
                options={categoriesData}
                value={filters.jobCategoryId}
                onChange={(value) => onFilterChange("jobCategoryId", value)}
              />
            </div>
          </Col>
          <Col lg={3} md={6}>
            <button type="submit" className="btn btn-primary w-100">
              <i className="uil uil-filter"></i> {language === 'pt' ? "Filtrar" : "Filter"}
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default JobSearchOptions;