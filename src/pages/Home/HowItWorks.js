import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  Nav,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

//Process Images Import
import processImage1 from "../../assets/images/process-01.png";
import processImage2 from "../../assets/images/process-02.png";
import processImage3 from "../../assets/images/process-03.png";

const HowItWorks = () => {
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
                <h3 className="title">Como Funciona?</h3>
                <p className="text-muted">
                  Publique um trabalho para nos contar sobre o seu projeto. Nós
                  o conectaremos rapidamente com os candidatos certos.
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
                        <h5 className="fs-18">Registre uma conta</h5>
                        <p className="text-muted mb-0">
                          Devido ao seu uso generalizado como texto de
                          preenchimento em layouts, a legibilidade é de grande
                          importância.
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
                        <h5 className="fs-18">Encontre seu trabalho</h5>
                        <p className="text-muted mb-0">
                          Existem muitas variações de passagens disponíveis, mas
                          a maioria sofreu alguma alteração.
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
                        <h5 className="fs-18">Candidate-se ao trabalho</h5>
                        <p className="text-muted mb-0">
                          É um fato conhecido que um leitor será distraído pelo
                          conteúdo legível de uma página.
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
