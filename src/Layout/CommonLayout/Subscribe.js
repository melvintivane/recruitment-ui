import React from "react";
import { Col, Container, Row } from "reactstrap";

//Import Image
import subscribeImg from "../../assets/images/subscribe.png";
import { useLanguage } from "../../context/LanguageContext";

const Subscribe = () => {
  const {language} = useLanguage();
  return (
    <React.Fragment>
      <section className="bg-subscribe">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg={6}>
              <div className="text-center text-lg-start">
                <h4 className="text-white">
                  {language === 'pt' ? "Receba notificações de novas vagas!" : "Receive notifications of new vacancies!"}
                </h4>
                <p className="text-white-50 mb-0">
                   {language === 'pt' ? "Inscreva-se e receba notificações de vagas relacionadas." : "Sign up and receive notifications of related vacancies."}
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
                      placeholder={language === 'pt' ? "Digite seu e-mail" : "Enter your e-mail"}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="subscribebtn"
                    >
                      {language === 'pt' ? "Inscrever-se" : "Subscribe"}
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
