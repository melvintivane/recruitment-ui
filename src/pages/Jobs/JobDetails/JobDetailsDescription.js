import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

// Import Images (you might want to update these with actual company images)
import JobDetailImage from "../../../assets/images/job-detail.jpg";
import JobImage10 from "../../../assets/images/featured-job/img-10.png";
import {
  translateCareerLevel,
  translateJobType,
  translateSector,
} from "../../../utils/jobTranslations";

const JobDetailsDescription = ({ job }) => {
  if (!job) return null;

  const {
    title,
    description,
    type,
    yearsOfExperience,
    careerLevel,
    sector,
    responsibilities = [],
    qualifications = [],
    skills = [],
    applicationCount,
  } = job;

  return (
    <React.Fragment>
      <Card className="job-detail overflow-hidden">
        <div>
          <img src={JobDetailImage} alt="" className="img-fluid" />
          <div className="job-details-compnay-profile">
            <img
              src={JobImage10}
              alt=""
              className="img-fluid rounded-3 rounded-3"
            />
          </div>
        </div>
        <CardBody className="p-4">
          <div>
            <Row>
              <Col md={8}>
                <h5 className="mb-1">{title}</h5>
                <ul className="list-inline text-muted mb-0">
                  <li className="list-inline-item">
                    <i className="mdi mdi-account"></i>{" "}
                    {applicationCount || "0"} Candidaturas
                  </li>
                  {/* <li className="list-inline-item text-warning review-rating">
                    <span className="badge bg-warning">4.5</span>{" "}
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star-half-full align-middle"></i>
                  </li> */}
                </ul>
              </Col>
            </Row>
          </div>

          <div className="mt-4">
            <Row className="g-2">
              <Col lg={3}>
                <div className="border rounded-start p-3">
                  <p className="text-muted mb-0 fs-13">Experiência</p>
                  <p className="fw-medium fs-15 mb-0">
                    {yearsOfExperience || "N/A"} Ano(s)
                  </p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Tipo de Emprego</p>
                  <p className="fw-medium mb-0">{translateJobType(type)}</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Posição</p>
                  <p className="fw-medium mb-0">
                    {translateCareerLevel(careerLevel)}
                  </p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border rounded-end p-3">
                  <p className="text-muted fs-13 mb-0">Sector</p>
                  <p className="fw-medium mb-0">
                    {translateSector(sector)}
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Descrição da Vaga</h5>
            <div className="job-detail-desc">
              <p className="text-muted mb-0">
                {description || "Nenhuma descrição fornecida."}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Responsabilidades</h5>
            <div className="job-detail-desc mt-2">
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
                {responsibilities.map((responsibility) => (
                  <li key={responsibility.id}>
                    <i className="uil uil-circle"></i> {responsibility.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Qualificações</h5>
            <div className="job-detail-desc mt-2">
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
                {qualifications.map((qualification) => (
                  <li key={qualification.id}>
                    <i className="uil uil-circle"></i> {qualification.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Habilidades e Experiência</h5>
            <div className="job-details-desc">
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
                {skills.map((skill) => (
                  <li key={skill.id}>
                    <i className="uil uil-circle"></i> {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 pt-3">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mt-1">Compartilhar esta vaga:</li>
              <li className="list-inline-item mt-1">
                <Link to="#" className="btn btn-primary btn-hover">
                  <i className="uil uil-facebook-f"></i> Facebook
                </Link>
              </li>
              <li className="list-inline-item mt-1">
                <Link to="#" className="btn btn-primary btn-hover">
                  <i className="uil uil-whatsapp"></i> WhatsApp
                </Link>
              </li>
              <li className="list-inline-item mt-1">
                <Link to="#" className="btn btn-success btn-hover">
                  <i className="uil uil-linkedin-alt"></i> LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default JobDetailsDescription;
