import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container className="container">
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center">
                <h2 className="text-primary mb-4">
                  Explore as Nossas{" "}
                  <span className="text-warning fw-bold">5.000+</span> Vagas
                  Recentes
                </h2>
                <p className="text-muted">
                  Publique um trabalho para nos contar sobre o seu projeto. Nós
                  o conectaremos rapidamente com os candidatos certos.
                </p>
                <div className="mt-4 pt-2">
                  <Link to="/joblist" className="btn btn-primary btn-hover">
                    Comece Agora{" "}
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
