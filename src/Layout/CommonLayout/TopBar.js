import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

//import images
import flagMz from "../../assets/images/flags/mz.jpeg";
import flagUs from "../../assets/images/flags/us.jpg";
import flagSp from "../../assets/images/flags/spain.jpg";
import flagGr from "../../assets/images/flags/germany.jpg";
import flagIt from "../../assets/images/flags/italy.jpg";
import flagRu from "../../assets/images/flags/russia.jpg";

const TopBar = () => {
  const iconTobar = [
    {
      id: 1,
      classname: "uil uil-whatsapp",
    },
    {
      id: 2,
      classname: "uil uil-facebook-messenger-alt",
    },
    {
      id: 3,
      classname: "uil uil-instagram",
    },
    {
      id: 4,
      classname: "uil uil-envelope",
    },
    {
      id: 5,
      classname: "uil uil-linkedin",
    },
  ];
  //Language Dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  //Signup Modal
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);

  return (
    <React.Fragment>
      <div className="top-bar" style={{ zIndex: 1040 }}>
        <Container fluid className="custom-container">
          <Row className="g-0 align-items-center">
            <Col md={7}>
              <ul className="list-inline mb-0 text-center text-md-start">
                <li className="list-inline-item">
                  <p className="fs-13 mb-0">
                    {" "}
                    <i className="mdi mdi-map-marker"></i> Sua Localização:{" "}
                    <Link to="#" className="text-dark">
                      Marracuene
                    </Link>
                  </p>
                </li>
                <li className="list-inline-item">
                  <ul className="topbar-social-menu list-inline mb-0">
                    {(iconTobar || []).map((icon, key) => (
                      <li className="list-inline-item" key={key}>
                        <Link to="/" className="social-link">
                          <i className={icon.classname}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </Col>

            <Col md={5}>
              <ul className="list-inline mb-0 text-center text-md-end">
                <li className="list-inline-item py-2 me-2 align-middle">
                  <span
                    onClick={openModal}
                    role="button"
                    className="text-dark fw-medium fs-13"
                  >
                    <i className="uil uil-lock"></i>
                    {" Cadastrar"}
                  </span>
                  <Modal
                    isOpen={modal}
                    toggle={openModal}
                    role="dialog"
                    centered
                  >
                    <ModalBody className="p-5">
                      <div className="position-absolute end-0 top-0 p-3">
                        <button
                          type="button"
                          className="btn-close"
                          onClick={openModal}
                        ></button>
                      </div>
                      <div className="auth-content">
                        <div className="w-100">
                          <div className="text-center mb-4">
                            <h5>Cadastro</h5>
                            <p className="text-muted">
                              Cadastre-se e tenha acesso a todas as
                              funcionalidades do Recruitment
                            </p>
                          </div>
                          <Form action="#" className="auth-form">
                            <FormGroup className="mb-3">
                              <Label
                                htmlFor="usernameInput"
                                className="form-label"
                              >
                                Nome de Usuário
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="usernameInput"
                                placeholder="Digite seu nome de usuário"
                              />
                            </FormGroup>
                            <FormGroup className="mb-3">
                              <Label
                                htmlFor="emailInput"
                                className="form-label"
                              >
                                Email
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="Digite seu email"
                              />
                            </FormGroup>
                            <FormGroup className="mb-3">
                              <label
                                htmlFor="passwordInput"
                                className="form-label"
                              >
                                Palavra-passe
                              </label>
                              <Input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                placeholder="Didite sua palavra-passe"
                              />
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <div className="form-check">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="flexCheckDefault"
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                >
                                  Concordo com os{" "}
                                  <Link
                                    to="/"
                                    className="text-primary form-text text-decoration-underline"
                                  >
                                    Termos e Condições
                                  </Link>
                                </Label>
                              </div>
                            </FormGroup>
                            <div className="text-center">
                              <button
                                type="submit"
                                className="btn btn-primary w-100"
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
                                className="form-text text-primary text-decoration-underline"
                              >
                                Entrar
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </ModalBody>
                  </Modal>
                </li>
                <li className="list-inline-item align-middle">
                  <Dropdown
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    className="d-inline-block language-switch"
                  >
                    <DropdownToggle tag="button" type="button" className="btn">
                      <img src={flagMz} alt="" height="16" />
                    </DropdownToggle>

                    <DropdownMenu className="dropdown-menu-end" end>
                      <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="eng"
                      >
                        <img src={flagUs} alt="" className="me-1" height="12" />
                        <span className="align-middle">English</span>
                      </DropdownItem>
                      <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="sp"
                      >
                        <img src={flagSp} alt="" className="me-1" height="12" />
                        <span className="align-middle">Spanish</span>
                      </DropdownItem>
                      <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="gr"
                      >
                        <img src={flagGr} alt="" className="me-1" height="12" />
                        <span className="align-middle">German</span>
                      </DropdownItem>
                      <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="it"
                      >
                        <img src={flagIt} alt="" className="me-1" height="12" />
                        <span className="align-middle">Italian</span>
                      </DropdownItem>
                      <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="ru"
                      >
                        <img src={flagRu} alt="" className="me-1" height="12" />
                        <span className="align-middle">Russian</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
