import React from "react";
import { Form } from "react-bootstrap";
import { Col, Input, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

const BlogForm = () => {
  const {language} = useLanguage();
  return (
    <React.Fragment>
      <Form action="#" className="contact-form mt-5">
        <h5 className="border-bottom pb-3">{language === 'pt' ? "Deixe uma Mensagem" : "Leave a message"}</h5>
        <Row className="mt-4">
          <Col lg={6}>
            <div className="position-relative mb-3">
              <label htmlFor="name" className="form-label">
                {language === 'pt' ? "Nome" : "Name"}
              </label>
              <Input
                name="name"
                id="name"
                type="text"
                className="form-control"
                placeholder={language === 'pt' ? "Digite seu nome*" : "Enter your name*"}
                required=""
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="position-relative mb-3">
              <label htmlFor="email" className="form-label">
                {language === 'pt' ? "Endereço de e-mail" : "E-mail adress"}
              </label>
              <Input
                name="email"
                id="email"
                type="email"
                className="form-control"
                placeholder={language === 'pt' ? "Digite seu e-mail*" : "Enter your e-mail*"}
                required=""
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="position-relative mb-3">
              <label htmlFor="subject" className="form-label">
                {language === 'pt' ? "Assunto" : "Subject"}
              </label>
              <Input
                name="subject"
                id="subject"
                type="text"
                className="form-control"
                placeholder={language === 'pt' ? "Assunto" : "Subject"}
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="position-relative mb-3">
              <label htmlFor="comments" className="form-label">
                {language === 'pt' ? "Mensagem" : "Message"}
              </label>
              <textarea
                name="comments"
                id="comments"
                rows="4"
                className="form-control"
                placeholder={language === 'pt' ? "Digite sua mensagem" : "Enter your message"}
              ></textarea>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-end">
            <button
              name="submit"
              type="submit"
              id="submit"
              className="btn btn-primary btn-hover"
            >
              {language === 'pt' ? "Enviar Mensagem" : "Send Message"} <i className="uil uil-message ms-1"></i>
            </button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default BlogForm;
