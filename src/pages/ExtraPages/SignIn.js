import React from "react";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";

//Import Image
import lightLogo from "../../assets/images/light-logo.png";
import darkLogo from "../../assets/images/dark-logo.png";

import signInImage from "../../assets/images/auth/sign-in.png";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  document.title = "Sign In";
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
                      <Row className="g-0">
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
                          <CardBody className="auth-content p-5 h-100 text-white">
                            <div className="w-100">
                              <div className="text-center mb-4">
                                <h5>Bem-vindo de Volta!</h5>
                                <p className="text-white-70">
                                  Faça login para continuar na Recruitment.
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
                                    id="usernameInput"
                                    placeholder="Digite seu nome de usuário"
                                    required
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="passwordInput"
                                    className="form-label"
                                  >
                                    Senha
                                  </label>
                                  <Input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    placeholder="Digite sua senha"
                                    required
                                  />
                                </div>
                                <div className="mb-4">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="flexCheckDefault"
                                    />
                                    <Link
                                      to="/resetpassword"
                                      className="float-end text-white"
                                    >
                                      Esqueceu a Senha?
                                    </Link>
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      Lembrar-me
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    Entrar
                                  </button>
                                </div>
                              </Form>
                              <div className="mt-4 text-center">
                                <p className="mb-0">
                                  Não tem uma conta?{" "}
                                  <Link
                                    to="/signup"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    Cadastre-se
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

export default SignIn;
