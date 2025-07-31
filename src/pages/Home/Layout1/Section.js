import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";
import CountryOptions from "../SubSection/CountryOptions";
import JobSearch from "../SubSection/JobSearch";
import JobType from "../SubSection/JobType";

const Section = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  // Estados para os campos de pesquisa
  const [searchParams, setSearchParams] = useState({
    jobTitle: "",
    country: "",
    jobType: ""
  });

  const sectionText = {
    pt: {
      titleFirstWords: "Explore As Nossas",
      titleSecondWords: "10.000+",
      titleThirdWords: "Vagas Abertas",
      paragraph:
        "Encontre empregos, crie currículos rastreáveis e valorize suas candidaturas.",
    },
    en: {
      titleFirstWords: "Explore Our",
      titleSecondWords: "10,000+",
      titleThirdWords: "Job Openings",
      paragraph:
        "Find jobs, build trackable résumés, and enhance your applications.",
    },
  };

  // Manipulador de mudança genérico para os campos
  const handleInputChange = (field, value) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Manipulador de submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você pode:
    // 1. Fazer uma chamada API para buscar vagas
    // 2. Navegar para uma página de resultados com os parâmetros
    // 3. Filtrar dados locais
    
    // Exemplo: navegar para a página de resultados com os parâmetros
    navigate(`/jobs?title=${encodeURIComponent(searchParams.jobTitle)}&country=${encodeURIComponent(searchParams.country)}&type=${encodeURIComponent(searchParams.jobType)}`);
    
    // Ou alternativamente, você poderia usar um contexto ou estado global para armazenar os parâmetros
  };

  const t = sectionText[language] || sectionText["pt"];
  return (
    <React.Fragment>
      <section className="bg-home" id="home">
        <div className="bg-overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center text-white mb-5">
                <h1 className="display-5 fw-semibold mb-3">
                  {t.titleFirstWords}{" "}
                  <span className="text-warning fw-bold">
                    {t.titleSecondWords}{" "}
                  </span>
                  {t.titleThirdWords}
                </h1>
                <p className="fs-17">{t.paragraph}</p>
              </div>
            </Col>
          </Row>

          <Form onSubmit={handleSubmit}>
            <div className="registration-form">
              <Row className="g-0">
                <Col lg={3}>
                  <div className="filter-search-form filter-border mt-3 mt-lg-0">
                    <i className="uil uil-briefcase-alt"></i>
                    <JobSearch 
                      value={searchParams.jobTitle}
                      onChange={(value) => handleInputChange('jobTitle', value)}
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="filter-search-form filter-border mt-3 mt-lg-0">
                    <i className="uil uil-map-marker"></i>
                    <CountryOptions 
                      value={searchParams.country}
                      onChange={(value) => handleInputChange('country', value)}
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="filter-search-form mt-3 mt-lg-0">
                    <i className="uil uil-clipboard-notes"></i>
                    <JobType 
                      value={searchParams.jobType}
                      onChange={(value) => handleInputChange('jobType', value)}
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mt-3 mt-lg-0 h-100">
                    <button
                      className="btn btn-primary submit-btn w-100 h-100"
                      type="submit"
                    >
                      <i className="uil uil-search me-1"></i> {language === 'pt' ? "Buscar Vaga" : "Search Vacancy"}
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
                  {language === "pt"
                    ? "Palavras-chave em alta:"
                    : "Trending Keywords:"}
                </li>
                <li className="list-inline-item">
                  <Link to="#">Design,</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    {language === "pt" ? "Desenvolvimento," : "Development,"}
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">
                    {language === "pt" ? "Gestor," : "Manager,"}
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">{language === "pt" ? "Sênior" : "Senior"}</Link>
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

export default Section;
