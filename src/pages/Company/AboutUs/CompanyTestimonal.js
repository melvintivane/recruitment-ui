import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Nav,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";

//About Images
import testImg01 from "../../../assets/images/about/img-02.jpg";
import testImg02 from "../../../assets/images/about/img-03.jpg";
import testImg03 from "../../../assets/images/about/img-04.jpg";
import testImg04 from "../../../assets/images/about/img-05.jpg";

const CompanyTestimonal = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="section-title mb-5 mb-lg-0">
                <h4 className="title mb-4">Depoimento da Empresa</h4>
                <p className="text-muted">
                  Nossa tarefa deve ser nos libertarmos, ampliando nosso círculo
                  de compaixão para abraçar todas as criaturas vivas. Integer
                  varius lacus non magna tempor congue natuasre, toda a sua
                  beleza você vestibulum egestas faz-los sentir.
                </p>
                <ul className="list-unstyled about-list text-muted mt-4">
                  <li>Soluções de Marketing Digital para o Futuro.</li>
                  <li>Nosso Talento & Agência de Marketing Experiente.</li>
                  <li>
                    Crie sua própria identidade para combinar com sua marca.
                  </li>
                  <li>
                    Diz-se que os compositores de canções do passado usavam
                    textos.
                  </li>
                </ul>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  <div>
                    <Link to="/" className="btn btn-outline-primary">
                      Saiba Mais <i className="uil uil-angle-right-b ms-1"></i>
                    </Link>
                  </div>
                  <ul className="list-inline about-social-menu mb-0">
                    <li className="list-inline-item">
                      <Link to="/" className="">
                        <i className="uil uil-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/" className="">
                        <i className="uil uil-twitter"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/" className="">
                        <i className="uil uil-whatsapp"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/" className="">
                        <i className="uil uil-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Row>
                <Col md={3}>
                  <Nav
                    tabs
                    className="about-testimonial-menu nav flex-sm-column flex-row nav-pills me-3"
                  >
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      <div className="position-relative">
                        <img src={testImg01} alt="" className="rounded" />
                        <div className="about-testi-bg-overlay">
                          <i className="mdi mdi-plus-circle-outline text-white fs-3"></i>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      <div className="position-relative">
                        <img src={testImg02} alt="" className="rounded" />
                        <div className="about-testi-bg-overlay">
                          <i className="mdi mdi-plus-circle-outline text-white fs-3"></i>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      <div className="position-relative">
                        <img src={testImg03} alt="" className="rounded" />
                        <div className="about-testi-bg-overlay">
                          <i className="mdi mdi-plus-circle-outline text-white fs-3"></i>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("4");
                      }}
                    >
                      <div className="position-relative">
                        <img src={testImg04} alt="" className="rounded" />
                        <div className="about-testi-bg-overlay">
                          <i className="mdi mdi-plus-circle-outline text-white fs-3"></i>
                        </div>
                      </div>
                    </NavLink>
                  </Nav>
                </Col>

                <Col md={9}>
                  <TabContent
                    className="about-tab-content h-100"
                    activeTab={activeTab}
                  >
                    <TabPane
                      tabId="1"
                      className="fade rounded-3 show"
                      style={{ backgroundImage: `url(${testImg01})` }}
                    ></TabPane>
                    <TabPane
                      tabId="2"
                      className="fade rounded-3 show"
                      style={{ backgroundImage: `url(${testImg02})` }}
                    ></TabPane>
                    <TabPane
                      tabId="3"
                      className="fade rounded-3 show"
                      style={{ backgroundImage: `url(${testImg03})` }}
                    ></TabPane>
                    <TabPane
                      tabId="4"
                      className="fade rounded-3 show"
                      style={{ backgroundImage: `url(${testImg04})` }}
                    ></TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CompanyTestimonal;
