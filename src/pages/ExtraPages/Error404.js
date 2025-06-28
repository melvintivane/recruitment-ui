import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// Importar imagem
import Error404Image from "../../assets/images/404.png";

const Error404 = () => {
  document.title = "Erro 404 | Recrutamento - Lista de Vagas | MobiSolutions";
  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-error bg-auth text-dark">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={6}>
                    <div className="text-center">
                      <img src={Error404Image} alt="" className="img-fluid" />
                      <div className="mt-5">
                        <h4 className="text-uppercase mt-3">
                          Desculpe, página não encontrada
                        </h4>
                        <p className="text-muted">
                          Será tão simples quanto o Ocidental — na verdade, será
                          Ocidental
                        </p>
                        <div className="mt-4">
                          <Link
                            className="btn btn-primary waves-effect waves-light"
                            to="/"
                          >
                            <i className="mdi mdi-home"></i> Voltar para a
                            Página Inicial
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Error404;
