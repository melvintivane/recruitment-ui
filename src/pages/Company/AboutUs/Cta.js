import React from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <div className="section-title text-center">
              <h3 className="title mb-4 pb-2">
                Veja tudo sobre seu funcionário em um só lugar.
              </h3>
              <p className="para-desc text-muted mx-auto">
                Comece a trabalhar com a Recruitment, que pode fornecer tudo o que
                você precisa para gerar reconhecimento, atrair tráfego e
                conectar.
              </p>
              <div className="mt-4">
                <Link to="#" className="btn btn-primary btn-hover mt-2">
                  <i className="uil uil-rocket me-1"></i> Comece Agora
                </Link>
                <Link
                  to="#"
                  className="btn btn-outline-primary btn-hover ms-sm-1 mt-2"
                >
                  <i className="uil uil-capsule me-1"></i> Teste Gratuito
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
