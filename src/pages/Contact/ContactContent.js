import React from "react";
import { Form } from "react-bootstrap";
import { Col, Container, Row, Input, Label } from "reactstrap";

//Importar imagens
import contactImage from "../../assets/images/contact.png";

const ContactContent = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center mt-5">
            <Col lg={6}>
              <div className="section-title mt-4 mt-lg-0">
                <h3 className="title">Entre em contato</h3>
                <p className="text-muted">
                  Comece a trabalhar com a Hireway que pode fornecer tudo o que
                  você precisa para gerar visibilidade, aumentar o tráfego e
                  conectar.
                </p>
                <Form
                  method="post"
                  className="contact-form mt-4"
                  name="myForm"
                  id="myForm"
                >
                  <span id="error-msg"></span>
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="nameInput" className="form-label">
                          Nome
                        </Label>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Digite seu nome"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label">
                          E-mail
                        </Label>
                        <Input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Digite seu e-mail"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="subjectInput" className="form-label">
                          Assunto
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Digite o assunto"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="messageInput" className="form-label">
                          Sua Mensagem
                        </Label>
                        <textarea
                          className="form-control"
                          placeholder="Digite sua mensagem"
                          name="comments"
                          rows="3"
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-end">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                    >
                      Enviar Mensagem <i className="uil uil-message ms-1"></i>
                    </button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col lg={5} className="ms-auto order-first order-lg-last">
              <div className="text-center">
                <img src={contactImage} alt="" className="img-fluid" />
              </div>
              <div className="mt-4 pt-3">
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-map-marker"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">
                      Avenida Julius Nyerere, Maputo, Moçambique
                    </p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-envelope"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">contactus@hireway.com</p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-phone-alt"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">(+258) 84 207 4393</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="map">
        <iframe
          title="Praça da OMM"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.963812325818!2d32.583142!3d-25.968347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee6bcb6286d3971%3A0x21497f5c37e40b66!2sPra%C3%A7a%20da%20OMM!5e0!3m2!1spt-PT!2smz!4v1713262686123!5m2!1spt-PT!2smz"
          height="350"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default ContactContent;
