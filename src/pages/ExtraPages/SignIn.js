import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import { Form } from "react-bootstrap";
import lightLogo from "../../assets/images/light-logo.png";
import darkLogo from "../../assets/images/dark-logo.png";
import signInImage from "../../assets/images/auth/sign-in.png";
import { toast } from "react-toastify";
import { login } from "../../services/authService";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importando ícones de olho

const SignIn = () => {
  document.title = "Login - Recruitment";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/esconder senha

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login(formData);

      const { accessToken, fullName, email, candidateId, expiresIn } =
        await response;

      // Armazenar apenas o token string
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("userName", fullName);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("candidateId", candidateId);
      localStorage.setItem("expiresIn", expiresIn);

      toast.success("Login realizado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Credenciais inválidas");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
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
                          to="/"
                          className="text-dark fw-bold fs-3 mx-auto d-flex align-items-center justify-content-center gap-2"
                        >
                          <img
                            src={lightLogo}
                            alt="Logo"
                            height="30"
                            className="logo-dark"
                          />
                          <img
                            src={darkLogo}
                            alt="Logo"
                            height="30"
                            className="logo-light"
                          />
                          Recruitment
                        </Link>
                        <div className="mt-5">
                          <img
                            src={signInImage}
                            alt="Ilustração de login"
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
                              Faça login para continuar na Recruitment
                            </p>
                          </div>

                          <Form onSubmit={handleSubmit} className="auth-form">
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
                                id="emailInput"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Digite seu email"
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
                              <div className="position-relative">
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  className="form-control"
                                  id="passwordInput"
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  placeholder="Digite sua senha"
                                  required
                                  minLength={6}
                                />
                                <button
                                  type="button"
                                  className="btn btn-link position-absolute end-0 top-50 translate-middle-y pe-3"
                                  onClick={togglePasswordVisibility}
                                  style={{
                                    color: "white",
                                    textDecoration: "none",
                                  }}
                                >
                                  {showPassword ? (
                                    <FiEyeOff size={18} />
                                  ) : (
                                    <FiEye size={18} />
                                  )}
                                </button>
                              </div>
                            </div>

                            <div className="mb-4 d-flex justify-content-between align-items-center">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="rememberMeCheck"
                                  checked={rememberMe}
                                  onChange={(e) =>
                                    setRememberMe(e.target.checked)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="rememberMeCheck"
                                >
                                  Lembrar-me
                                </label>
                              </div>

                              <Link
                                to="/reset-password"
                                className="text-white text-decoration-underline"
                              >
                                Esqueceu a Senha?
                              </Link>
                            </div>

                            <div className="text-center">
                              <button
                                type="submit"
                                className="btn btn-white btn-hover w-100"
                                disabled={isLoading}
                              >
                                {isLoading ? (
                                  <span
                                    className="spinner-border spinner-border-sm me-1"
                                    role="status"
                                    aria-hidden="true"
                                  />
                                ) : null}
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
  );
};

export default SignIn;
