import React from "react";

import lightLogo from "../../assets/images/light-logo.png";
import darkLogo from "../../assets/images/dark-logo.png";

import signInImage from "../../assets/images/auth/sign-in.png";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const SignOut = () => {
  document.title = "Sign Out | Recruitment - Job Listing | MobiSolutions";
  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row>
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link
                              className="text-dark fw-bold fs-3 mx-auto d-flex align-items-center justify-content-center gap-2"
                              to="/"
                            >
                              <img
                                src={lightLogo}
                                alt=""
                                height="30"
                                className="logo-dark"
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                height="30"
                                className="logo-light"
                              />
                              Recruitment
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signInImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <div className="auth-content card-body p-5 text-white">
                            <div className="w-100">
                              <div className="text-center mb-4">
                                <h5>Você Saiu da Conta</h5>
                                <p className="text-white-70">
                                  Obrigado por utilizar o Recruitment
                                </p>
                              </div>
                              <Link
                                to="/signin"
                                className="btn btn-white btn-hover w-100"
                              >
                                Entrar
                              </Link>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  Ainda não tem uma conta?{" "}
                                  <Link
                                    to="/signup"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    Cadastrar-se
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Card>
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

export default SignOut;
