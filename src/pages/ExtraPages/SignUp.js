import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Col, Input, Row, CardBody, Toast } from "reactstrap";
import lightLogo from "../../assets/images/light-logo.png";
import darkLogo from "../../assets/images/dark-logo.png";
import signUpImage from "../../assets/images/auth/sign-up.png";
import { Form } from "react-bootstrap";
import { signUp } from "../../services/authService";

const SignUp = () => {
  document.title = "Registro";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(formData);
      Toast.success("Cadastro realizado com sucesso!");
      console.log("Usuário cadastrado:", response);

      // Redirecionar ou mostrar mensagem de sucesso
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <React.Fragment>
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
                            to="/"
                            className="text-dark fw-bold fs-3 mx-auto d-flex align-items-center justify-content-center gap-2"
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
                            <div className="text-center mb-4">
                              <h5 className="text-white-70 text-uppercase">Cadastre-se!</h5>
                            </div>
                            <Form onSubmit={handleSubmit} className="auth-form">
                              <Row>
                                <Col md={6}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="firstNameInput"
                                      className="form-label"
                                    >
                                      Nome
                                    </label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      required
                                      id="firstNameInput"
                                      name="firstName"
                                      value={formData.firstName}
                                      onChange={handleChange}
                                      placeholder="Digite seu nome"
                                    />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="lastNameInput"
                                      className="form-label"
                                    >
                                      Sobrenome
                                    </label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      required
                                      id="lastNameInput"
                                      name="lastName"
                                      value={formData.lastName}
                                      onChange={handleChange}
                                      placeholder="Digite seu sobrenome"
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <div className="mb-3">
                                <label
                                  htmlFor="emailInput"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <Input
                                  type="email"
                                  className="form-control"
                                  required
                                  id="emailInput"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="Digite seu email"
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
                                  required
                                  id="passwordInput"
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  placeholder="Crie uma senha forte"
                                />
                              </div>

                              <div className="mb-4">
                                <div className="form-check">
                                  <Input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    required
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
    </React.Fragment>
  );
};

export default SignUp;
