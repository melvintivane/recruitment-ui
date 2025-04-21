import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Importar Imagens
import AboutImage from "../../../assets/images/about/img-01.jpg";

const About = () => {
  return (
    <React.Fragment>
      <section className="section overflow-hidden">
        <Container>
          <Row className="align-items-center g-0">
            <Col lg={6}>
              <div className="section-title me-lg-5">
                <h6 className="sub-title">Sobre Nós</h6>
                <h2 className="title mb-4">
                  Por que <span className="text-warning fw-bold">35.000+</span>{" "}
                  Pessoas Confiam na Hireway?
                </h2>
                <p className="text-muted">
                  Comece a trabalhar com a Hireway, que pode fornecer tudo o que
                  você precisa para gerar reconhecimento, atrair tráfego e
                  conectar. Texto fictício é um texto usado na indústria de
                  publicação ou por designers de sites para ocupar o espaço que
                  será posteriormente preenchido com conteúdo 'real'.
                </p>

                <Row className="mt-4 pt-2">
                  <Col md={6}>
                    <ul className="list-unstyled about-list text-muted mb-0 mb-md-3">
                      <li> Soluções de Marketing Digital</li>
                      <li>
                        {" "}
                        Nossa Agência de Marketing Talented & Experienced
                      </li>
                      <li> Design Criativo</li>
                      <li> Inovação de Novos Empregos</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled about-list text-muted">
                      <li> Criar Currículo</li>
                      <li> 5000+ Empresas</li>
                      <li> Nosso Blog</li>
                      <li> e mais...</li>
                    </ul>
                  </Col>
                </Row>
                <div className="mt-3">
                  <Link to="#" className="btn btn-primary btn-hover">
                    Saiba Mais{" "}
                    <i className="uil uil-angle-right-b align-middle"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-img mt-4 mt-lg-0">
                <img src={AboutImage} alt="" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default About;
