import React from "react";

//Import Image
import lightLogo from "../../assets/images/light-logo.png";
import darkLogo from "../../assets/images/dark-logo.png";

import resetPasswordImage from "../../assets/images/auth/reset-password.png";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const ResetPassword = () => {
  document.title = "Reset Password | Hireway - Job Listing | Mobitel";
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
                              Hireway
                            </Link>
                            <div className="mt-5">
                              <img
                                src={resetPasswordImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 h-100 text-white">
                            <div className="text-center mb-4">
                              <h5>Redefinir Senha</h5>
                              <p className="text-white-50">
                                Redefina sua senha com a Hireway.
                              </p>
                            </div>
                            <Form className="auth-form text-white">
                              <div
                                className="alert alert-warning text-center mb-4"
                                role="alert"
                              >
                                Insira seu email e as instruções serão enviadas
                                para você!
                              </div>
                              <div className="mb-4">
                                <label className="form-label" htmlFor="email">
                                  Nome de Usuário/Email
                                </label>
                                <Input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="Digite o nome de usuário ou email"
                                />
                              </div>
                              <div className="mt-3">
                                <button
                                  type="submit"
                                  className="btn btn-white w-100"
                                >
                                  Enviar Solicitação
                                </button>
                              </div>
                            </Form>
                            <div className="mt-5 text-center text-white-50">
                              <p>
                                Lembrou a senha?{" "}
                                <Link
                                  to="/signin"
                                  className="fw-medium text-white text-decoration-underline"
                                >
                                  Ir para o Login
                                </Link>
                              </p>
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

export default ResetPassword;
