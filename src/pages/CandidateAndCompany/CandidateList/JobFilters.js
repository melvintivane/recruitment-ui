import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Input, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";
import CountryOptions from "../../Home/SubSection/CountryOptions";
import JobType from "../../Home/SubSection/JobType";

const JobFilters = () => {
  const {language} = useLanguage();
  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col lg={12}>
          <div className="candidate-list-widgets mb-4">
            <Form action="#">
              <Row className="g-2">
                <Col lg={3}>
                  <div className="filler-job-form">
                    <i className="uil uil-briefcase-alt"></i>
                    <Input
                      type="search"
                      className="form-control filter-input-box"
                      id="exampleFormControlInput1"
                      placeholder={language === 'pt' ? "Emprego, empresa... " : "Job, company... "}
                      style={{ marginTop: "-12px" }}
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="filler-job-form">
                    <i className="uil uil-location-point"></i>

                    <CountryOptions />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="filler-job-form">
                    <i className="uil uil-clipboard-notes"></i>
                    <JobType />
                  </div>
                </Col>
                <Col lg={3}>
                  <div>
                    <Link to="#" className="btn btn-primary">
                      <i className="uil uil-filter"></i>{language === 'pt' ? "Filtro" : "Filter"}
                    </Link>
                    <Link to="#" className="btn btn-success ms-2">
                      <i className="uil uil-cog"></i>{language === 'pt' ? "Avançar" : "Advance"} 
                    </Link>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default JobFilters;
