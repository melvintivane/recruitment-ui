import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Col, Container, Input, Label, Row } from "reactstrap";
import { useLanguage } from "../../context/LanguageContext";

import contactImage from "../../assets/images/contact.png";
import { toast } from "react-toastify";

const ContactContent = () => {
  const {language} = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    toast.success(language === 'pt' ? "Mensagem enviada com sucesso!" : "Message sent successfully!");
    
    console.log("Form Data Submitted:", data);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário, por exemplo, usando
    // uma API ou serviço de backend. 

    setFormData({
      name: "",
      subject: "",
      email: "",
      message: "",
    });
  };

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center mt-5">
            <Col lg={6}>
              <div className="section-title mt-4 mt-lg-0">
                <h3 className="title">{language === 'pt' ? "Entre em contacto" : "Get in touch"}</h3>
                <p className="text-muted">
                  {language === 'pt' ? "Comece a trabalhar com a Recruitment que pode fornecer tudo o que você precisa para gerar visibilidade, aumentar o tráfego e conectar." : "Get started with Recruitment, which can provide everything you need to generate visibility, increase traffic, and connect."}
                </p>
                <Form
                  method="post"
                  className="contact-form mt-4"
                  name="myForm"
                  id="myForm"
                  onSubmit={handleSubmit}
                >
                  <span id="error-msg"></span>
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="nameInput" className="form-label">
                          {language === 'pt' ? "Nome" : "Name"}
                        </Label>
                        <Input
                          required
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder={language === 'pt' ? "Digite seu nome" : "Enter your name"}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="subjectInput" className="form-label">
                          {language === 'pt' ? "Assunto" : "Subject"}
                        </Label>
                        <Input
                          required
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder={language === 'pt' ? "Digite o assunto" : "Enter the subject"}
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label">
                          E-mail
                        </Label>
                        <Input
                          required
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder={language === 'pt' ? "Digite seu e-mail" : "Enter your e-mail"}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="contactInput" className="form-label">
                          {language === 'pt' ? "Contacto" : "Contact"}
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          name="contact"
                          placeholder={language === 'pt' ? "Digite o seu contacto" : "Enter  your contact"}
                          value={formData.contact || ""}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="messageInput" className="form-label">
                          {language === 'pt' ? "Sua Mensagem" : "Your Message"} 
                        </Label>
                        <textarea
                          className="form-control"
                          placeholder={language === 'pt' ?"Digite sua mensagem" : "Enter your message"}
                          name="comments"
                          rows="3"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-end">
                    <button
                      type="submit"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                    >
                      {language === 'pt' ? "Enviar Mensagem" : "Send Message"} <i className="uil uil-message ms-1"></i>
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
                    <p className="mb-0">contactus@Recruitmentcom</p>
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
