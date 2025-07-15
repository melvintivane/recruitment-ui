import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

const Cta = () => {
  const {language} = useLanguage();
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <div className="section-title text-center">
              <h3 className="title mb-4 pb-2">
                {language === 'pt' ? "Encontre novos funcionários." : "Find new employees."}
              </h3>
              <p className="para-desc text-muted mx-auto">
                {language === 'pt' ? "Comece a trabalhar com a Recruitment, que pode fornecer tudo o que precisa para gerar notoriedade, atrair tráfego e conectar-se." : "Get started with Recruitment, which can provide everything you need to generate awareness, attract traffic, and connect."}
              </p>
              <div className="mt-4">
                <Link to="#" className="btn btn-primary btn-hover mt-2">
                  <i className="uil uil-rocket"></i> {language === 'pt' ? "Começar Agora" : "Get Started"}
                </Link>
                <Link
                  to="#"
                  className="btn btn-outline-primary btn-hover ms-sm-1 mt-2"
                >
                  <i className="uil uil-capsule"></i> {language === 'pt' ? "Teste Gratuito" : "Free Trial"}
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Cta;
