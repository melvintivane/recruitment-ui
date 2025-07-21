import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useLanguage } from "../../context/LanguageContext";

const Jobcatogaries = () => {

  const { language } = useLanguage();

  const translatedCategories = {
    pt: {
      categories: [
        {
          id: 1,
          icon: "uim-layers-alt",
          name: "TI & Software",
          job: 2024,
        },
        {
          id: 2,
          icon: "uim-airplay",
          name: "Tecnologia",
          job: 1250,
        },
        {
          id: 3,
          icon: "uim-bag",
          name: "Governo",
          job: 802,
        },
        {
          id: 4,
          icon: "uim-user-md",
          name: "Finanças",
          job: 577,
        },
        {
          id: 5,
          icon: "uim-hospital",
          name: "Construção",
          job: 285,
        },
        {
          id: 6,
          icon: "uim-telegram-alt",
          name: "Telecomunicações",
          job: 495,
        },
        {
          id: 7,
          icon: "uim-scenery",
          name: "Design & Multimídia",
          job: 1045,
        },
        {
          id: 8,
          icon: "uim-android-alt",
          name: "Recursos Humanos",
          job: 1516,
        },
      ]
    },
    en: {
      categories :[
        {
          id: 1,
          icon: "uim-layers-alt",
          name: "IT & Software",
          job: 2024,
        },
        {
          id: 2,
          icon: "uim-airplay",
          name: "Technology",
          job: 1250,
        },
        {
          id: 3,
          icon: "uim-bag",
          name: "Government",
          job: 802,
        },
        {
          id: 4,
          icon: "uim-user-md",
          name: "Finance",
          job: 577,
        },
        {
          id: 5,
          icon: "uim-hospital",
          name: "Construction",
          job: 285,
        },
        {
          id: 6,
          icon: "uim-telegram-alt",
          name: "Telecommunications",
          job: 495,
        },
        {
          id: 7,
          icon: "uim-scenery",
          name: "Design & Multimedia",
          job: 1045,
        },
        {
          id: 8,
          icon: "uim-android-alt",
          name: "Human Resources",
          job: 1516,
        },
      ]
    }
  }

  const t = translatedCategories[language] || translatedCategories['pt']

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3 className="title">{language === 'pt' ? "Categorias de Emprego" : "Job Categories"}</h3>
                <p className="text-muted">
                  {language === 'pt' ?
                    "Publique uma vaga para nos contar sobre o seu projeto. Iremos rapidamente conectá-lo  com os candidatos ideais."
                    : "Post a job to tell us about your project. We'll quickly connect you with the ideal candidates."
                  }
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {(t.categories || []).map((item, key) => (
              <Col lg={3} md={6} className="pt-2 mt-4" key={key}>
                <div className="popu-category-box rounded text-center">
                  <div className="popu-category-icon icons-md">
                    <Icon icon={item.icon} className="text-primary" />
                  </div>
                  <div className="popu-category-content mt-4">
                    <Link to="/joblist" className="text-dark stretched-link">
                      <h5 className="fs-18">{item.name}</h5>
                    </Link>
                    <p className="text-muted mb-0">{item.job} {language === 'pt' ? "Vagas" : "Vancancies"}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12}>
              <div className="mt-5 text-center">
                <Link
                  to="/jobscategories"
                  className="btn btn-primary btn-hover"
                >
                  {language === 'pt' ? "Ver Todas as Categorias" : "See All Categories"} <i className="uil uil-arrow-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Jobcatogaries;
