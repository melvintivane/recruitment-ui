import classnames from "classnames";
import React, { useState } from "react";
import {
  Col,
  Container,
  Nav,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

//Process Images Import
import processImage1 from "../../assets/images/process-01.png";
import processImage2 from "../../assets/images/process-02.png";
import processImage3 from "../../assets/images/process-03.png";
import { useLanguage } from "../../context/LanguageContext";

const HowItWorks = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="section-title me-5">
                <h3 className="title">
                  {language === "pt" ? "Como Funciona?" : "How does it work?"}
                </h3>
                <p className="text-muted">
                  {language === "pt"
                    ? "Descubra vagas alinhadas ao seu perfil e candidate-se com facilidade para dar um novo passo na sua carreira."
                    : "Discover jobs that match your profile and apply easily to take the next step in your career."}
                </p>
                <Nav className="process-menu  flex-column nav-pills">
                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      tabChange("1");
                    }}
                    type="button"
                  >
                    <div className="d-flex">
                      <div className="number flex-shrink-0">1</div>
                      <div className="flex-grow-1 text-start ms-3">
                        <h5 className="fs-18">
                          {language === "pt"
                            ? "Registre uma conta"
                            : "Register an account"}
                        </h5>
                        <p className="text-muted mb-0">
                          {language === "pt"
                            ? "Crie uma conta para acessar oportunidades exclusivas, acompanhar suas candidaturas e receber notificações personalizadas."
                            : "Create an account to access exclusive opportunities, track your applications, and receive personalized notifications."}
                        </p>
                      </div>
                    </div>
                  </NavLink>

                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      tabChange("2");
                    }}
                    type="button"
                  >
                    <div className="d-flex">
                      <div className="number flex-shrink-0">2</div>
                      <div className="flex-grow-1 text-start ms-3">
                        <h5 className="fs-18">
                          {language === "pt"
                            ? "Encontre sua vaga"
                            : "Find your vacancy"}
                        </h5>
                        <p className="text-muted mb-0">
                          {language === "pt"
                            ? "Explore centenas de vagas disponíveis e encontre aquela que melhor se encaixa no seu perfil profissional."
                            : "Browse hundreds of available job listings and find the one that best matches your professional profile."}
                        </p>
                      </div>
                    </div>
                  </NavLink>

                  <NavLink
                    to="#"
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      tabChange("3");
                    }}
                    type="button"
                  >
                    <div className=" d-flex">
                      <div className="number flex-shrink-0">3</div>
                      <div className="flex-grow-1 text-start ms-3">
                        <h5 className="fs-18">
                          {language === "pt"
                            ? "Candidate-se à vaga"
                            : "Apply for the vacancy"}
                        </h5>
                        <p className="text-muted mb-0">
                          {language === "pt"
                            ? "Envie sua candidatura de forma rápida e fácil, e aumente suas chances de conquistar a vaga desejada."
                            : "Submit your application quickly and easily, and increase your chances of landing your desired job."}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </Nav>
              </div>
            </Col>
            <Col lg={6}>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <img src={processImage1} alt="" className="img-fluid" />
                </TabPane>
                <TabPane tabId="2">
                  <img src={processImage2} alt="" className="img-fluid" />
                </TabPane>
                <TabPane tabId="3">
                  <img src={processImage3} alt="" className="img-fluid" />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default HowItWorks;
