import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useLanguage } from "../../context/LanguageContext";

const Cta = () => {
  const {language} = useLanguage();
  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container className="container">
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center">
                <h2 className="text-primary mb-4">
                  {language === 'pt' ? "Explore as Nossas" : "Explore our"}{" "}
                  <span className="text-warning fw-bold">5.000+</span> {language === 'pt' ? "Vagas Recentes" : "Latest Vacancies"}
                </h2>
                <p className="text-muted">
                  {language === 'pt' ? "Publique uma vaga para nos contar sobre seu projeto. Iremos conectá-lo rapidamente com os candidatos certos." : "Post a job to tell us about your project. We'll quickly connect you with the right candidates."}
                  
                </p>
                <div className="mt-4 pt-2">
                  <Link to="/joblist" className="btn btn-primary btn-hover">
                    {language === 'pt' ? "Comece Agora" : "Get Started"}{" "}
                    <i className="uil uil-rocket align-middle ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Cta;
