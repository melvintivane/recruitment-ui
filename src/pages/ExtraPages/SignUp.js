import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Col, Input, Row, CardBody } from "reactstrap";

import lightLogo from "../../assets/images/light-logo.png";
import darkLogo from "../../assets/images/dark-logo.png";

import signUpImage from "../../assets/images/auth/sign-up.png";
import { Form } from "react-bootstrap";

const SignUp = () => {
  document.title = "Sign Up | Hireway - Job Listing | Mobitel";
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
                      <Row className="align-items-center">
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
                              Hireway
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signUpImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 text-white">
                            <div className="w-100">
                              <div className="text-center">
                                <h5>Vamos Começar</h5>
                                <p className="text-white-70">
                                  Cadastre-se e tenha acesso a todos os recursos
                                  do Hireway
                                </p>
                              </div>
                              <Form action="/" className="auth-form">
                                <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    Nome de Usuário
                                  </label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    required
                                    id="usernameInput"
                                    placeholder="Digite seu nome de usuário"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="passwordInput"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <Input
                                    type="email"
                                    className="form-control"
                                    required
                                    id="emailInput"
                                    placeholder="Digite seu email"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Senha
                                  </label>
                                  <Input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    placeholder="Digite sua senha"
                                  />
                                </div>
                                <div className="mb-4">
                                  <div className="form-check">
                                    <Input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="flexCheckDefault"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      Eu concordo com os{" "}
                                      <Link
                                        to="#"
                                        className="text-white text-decoration-underline"
                                      >
                                        Termos e Condições
                                      </Link>
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    Cadastrar
                                  </button>
                                </div>
                              </Form>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  Já tem uma conta?{" "}
                                  <Link
                                    to="/signin"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    Entrar
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </CardBody>
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

export default SignUp;
