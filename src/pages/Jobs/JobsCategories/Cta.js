import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";

const Cta = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <div className="section-title text-center">
              <h3 className="title mb-4 pb-2">
                Encontre novos funcionários.
              </h3>
              <p className="para-desc text-muted mx-auto">
                Comece a trabalhar com a Hireway, que pode fornecer tudo o que
                precisa para gerar notoriedade, atrair tráfego e conectar-se.
              </p>
              <div className="mt-4">
                <Link to="#" className="btn btn-primary btn-hover mt-2">
                  <i className="uil uil-rocket"></i> Começar Agora
                </Link>
                <Link
                  to="#"
                  className="btn btn-outline-primary btn-hover ms-sm-1 mt-2"
                >
                  <i className="uil uil-capsule"></i> Teste Gratuito
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
