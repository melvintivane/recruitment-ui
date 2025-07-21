import React from "react";
import CountUp from "react-countup";
import { Col, Container, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

const Counter = () => {
  const {language} = useLanguage();
  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="counter-box mt-3">
                <div className="counters counter_custom text-center">
                  <CountUp
                    end={10000}
                    duration={1}
                    className="counter mb-0"
                  ></CountUp>
                  <h6 className="fs-16 mt-3 ">{language === 'pt' ? "Vagas Disponíveis" : "Available Vacancies"}</h6>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="counter-box mt-3">
                <div className="counters counter_custom text-center">
                  <CountUp
                    end={7500}
                    duration={1}
                    className="counter mb-0"
                  ></CountUp>
                  <h6 className="fs-16 mt-3">{language === 'pt' ? "Candidaturas" : "Applications"}</h6>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="counter-box mt-3">
                <div className="counters counter_custom text-center">
                  <CountUp
                    end={8.85}
                    decimals={2}
                    duration={1}
                    className="counter mb-0"
                  ></CountUp>
                  <h6 className="fs-16 mt-3">{language === 'pt' ? "Feedback Positivo" : "Positive Feedback"}</h6>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="counter-box mt-3">
                <div className="counters counter_custom text-center">
                  <CountUp
                    end={9875}
                    duration={1}
                    className="counter mb-0"
                  ></CountUp>
                  <h6 className="fs-16 mt-3">{language === 'pt' ? "Membros" : "Members"}</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Counter;
