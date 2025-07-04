import React from "react";
import { Col, Container, Row, Form } from "reactstrap";
import { Link } from "react-router-dom";
import JobSearch from "../SubSection/JobSearch";
import CountryOptions from "../SubSection/CountryOptions";
import JobType from "../SubSection/JobType";

const section = () => {
  return (
    <React.Fragment>
      <section className="bg-home" id="home">
        <div className="bg-overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center text-white mb-5">
                <h1 className="display-5 fw-semibold mb-3">
                  Explore As Nossas{" "}
                  <span className="text-warning fw-bold">10,000+ </span>
                  Abertas.
                </h1>
                <p className="fs-17">
                  Encontre empregos, crie currículos rastreáveis e valorize suas
                  candidaturas.
                </p>
              </div>
            </Col>
          </Row>

          <Form action="#">
            <div className="registration-form">
              <Row className="g-0">
                <Col lg={3}>
                  <div className="filter-search-form filter-border mt-3 mt-lg-0">
                    <i className="uil uil-briefcase-alt"></i>
                    <JobSearch />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="filter-search-form filter-border mt-3 mt-lg-0">
                    <i className="uil uil-map-marker "></i>
                    <CountryOptions />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="filter-search-form mt-3 mt-lg-0">
                    <i className="uil uil-clipboard-notes"></i>
                    <JobType />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mt-3 mt-lg-0 h-100">
                    <button
                      className="btn btn-primary submit-btn w-100 h-100"
                      type="submit"
                    >
                      <i className="uil uil-search me-1"></i> Buscar Vaga
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Form>

          <Row>
            <Col lg={12}>
              <ul className="treding-keywords list-inline mb-0 text-white-50 mt-4 mt-lg-3 text-center">
                <li className="list-inline-item text-white">
                  <i className="mdi mdi-tag-multiple-outline text-warning fs-18"></i>{" "}
                  Palavras-chave em alta:
                </li>
                <li className="list-inline-item">
                  <Link to="#">Design,</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Desenvolvimento,</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Gestor,</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Sênior</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="position-relative">
        <div className="shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="1440"
            height="150"
            preserveAspectRatio="none"
            viewBox="0 0 1440 220"
          >
            <g mask='url("#SvgjsMask1004")' fill="none">
              <path
                d="M 0,213 C 288,186.4 1152,106.6 1440,80L1440 250L0 250z"
                fill="rgba(255, 255, 255, 1)"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1004">
                <rect width="1440" height="250" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section;
