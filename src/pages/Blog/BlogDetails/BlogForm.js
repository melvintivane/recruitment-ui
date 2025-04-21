import React from "react";
import { Form } from "react-bootstrap";
import { Col, Input, Row } from "reactstrap";

const BlogForm = () => {
  return (
    <React.Fragment>
      <Form action="#" className="contact-form mt-5">
        <h5 className="border-bottom pb-3">Deixe uma Mensagem</h5>
        <Row className="mt-4">
          <Col lg={6}>
            <div className="position-relative mb-3">
              <label htmlFor="name" className="form-label">
                Nome
              </label>
              <Input
                name="name"
                id="name"
                type="text"
                className="form-control"
                placeholder="Digite seu nome*"
                required=""
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="position-relative mb-3">
              <label htmlFor="email" className="form-label">
                Endereço de e-mail
              </label>
              <Input
                name="email"
                id="email"
                type="email"
                className="form-control"
                placeholder="Digite seu e-mail*"
                required=""
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="position-relative mb-3">
              <label htmlFor="subject" className="form-label">
                Assunto
              </label>
              <Input
                name="subject"
                id="subject"
                type="text"
                className="form-control"
                placeholder="Assunto"
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="position-relative mb-3">
              <label htmlFor="comments" className="form-label">
                Mensagem
              </label>
              <textarea
                name="comments"
                id="comments"
                rows="4"
                className="form-control"
                placeholder="Digite sua mensagem"
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
              Enviar Mensagem <i className="uil uil-message ms-1"></i>
            </button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default BlogForm;
