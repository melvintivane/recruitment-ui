import React from "react";
import { Col, Container, Row } from "reactstrap";

//Import Image
import subscribeImg from "../../assets/images/subscribe.png";

const Subscribe = () => {
  return (
    <React.Fragment>
      <section className="bg-subscribe">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg={6}>
              <div className="text-center text-lg-start">
                <h4 className="text-white">
                  Receba notificações de novas vagas!
                </h4>
                <p className="text-white-50 mb-0">
                  Inscreva-se e receba notificações de vagas relacionadas.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt-4 mt-lg-0">
                <form className="subscribe-form" action="#">
                  <div className="input-group justify-content-center justify-content-lg-end">
                    <input
                      type="text"
                      className="form-control"
                      id="subscribe"
                      placeholder="Digite seu e-mail"
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="subscribebtn"
                    >
                      Inscrever-se
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="email-img d-none d-lg-block">
          <img src={subscribeImg} alt="" className="img-fluid" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Subscribe;
