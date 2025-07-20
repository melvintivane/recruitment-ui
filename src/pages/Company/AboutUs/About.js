import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

//Importar Imagens
import AboutImage from "../../../assets/images/about/img-01.jpg";

const About = () => {
  const { language } = useLanguage();
  return (
    <React.Fragment>
      <section className="section overflow-hidden">
        <Container>
          <Row className="align-items-center g-0">
            <Col lg={6}>
              <div className="section-title me-lg-5">
                <h6 className="sub-title">{language === 'pt' ? "Sobre Nós" : "About Us"}</h6>
                <h2 className="title mb-4">
                  {language === 'pt' ? (
                    <>
                      Por que <span className="text-warning fw-bold">35.000+</span> Pessoas Confiam na EP Recruitment?
                    </>
                  ) : (
                    <>
                      Why Do <span className="text-warning fw-bold">35,000+</span> People Trust EP Recruitment?
                    </>
                  )}

                </h2>
                <p className="text-muted">
                  {language === 'pt' ? "Comece a trabalhar com a Recruitment, que pode fornecer tudo o que você precisa para gerar reconhecimento, atrair tráfego e conectar. Texto fictício é um texto usado na indústria de publicação ou por designers de sites para ocupar o espaço que será posteriormente preenchido com conteúdo 'real'." : 
                  "Start working with Recruitment, which can provide everything you need to generate awareness, attract traffic, and connect. Dummy text is text used in the publishing industry or by website designers to fill space that will later be filled with 'real' content."}
                </p>

                <Row className="mt-4 pt-2">
                  <Col md={6}>
                    <ul className="list-unstyled about-list text-muted mb-0 mb-md-3">
                      <li>{language === 'pt' ? "Soluções de Marketing Digital" : "Digital Marketing Solutions"}</li>
                      <li>
                        {" "}
                        {language === 'pt' ? "Nossa Agência de Marketing Talented & Experienced" : "Our Talented & Experienced Marketing Agency"}
                      </li>
                      <li>{language === 'pt' ? "Design Criativo" : "Creative Design"}</li>
                      <li>{language === 'pt' ? "Inovação de Novos Empregos" : "New Job Innovation"}</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled about-list text-muted">
                      <li>{language === 'pt' ? "Criar Currículo" : "Create Resume"}</li>
                      <li>{language === 'pt' ? "5000+ Empresas" : "5000+ Companies"}</li>
                      <li>{language === 'pt' ? "Nosso Blog" : "Our Blog"}</li>
                      <li>{language === 'pt' ? "e mais..." : "and more..."}</li>
                    </ul>
                  </Col>
                </Row>
                <div className="mt-3">
                  <Link to="#" className="btn btn-primary btn-hover">
                    {language === 'pt' ? "Saiba Mais" : "Know More"}{" "}
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
