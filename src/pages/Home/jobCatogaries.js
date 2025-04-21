import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Jobcatogaries = () => {
  const categories = [
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
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3 className="title">Categorias de Emprego</h3>
                <p className="text-muted">
                  Publique uma vaga para nos contar sobre o seu projeto. Iremos
                  rapidamente conectá-lo com os candidatos ideais.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {(categories || []).map((item, key) => (
              <Col lg={3} md={6} className="pt-2 mt-4" key={key}>
                <div className="popu-category-box rounded text-center">
                  <div className="popu-category-icon icons-md">
                    <Icon icon={item.icon} className="text-primary" />
                  </div>
                  <div className="popu-category-content mt-4">
                    <Link to="/joblist" className="text-dark stretched-link">
                      <h5 className="fs-18">{item.name}</h5>
                    </Link>
                    <p className="text-muted mb-0">{item.job} Vagas</p>
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
                  Ver Todas as Categorias <i className="uil uil-arrow-right"></i>
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
