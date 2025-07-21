import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Input, Row } from "reactstrap";

//Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//Import Blog Imgaes
import blogImage1 from "../../../assets/images/blog/img-01.jpg";
import blogImage2 from "../../../assets/images/blog/img-02.jpg";
import blogImage3 from "../../../assets/images/blog/img-03.jpg";

//Import user Images
import userImage2 from "../../../assets/images/user/img-02.jpg";
import userImage4 from "../../../assets/images/user/img-04.jpg";

import { useLanguage } from "../../../context/LanguageContext";

const images = [blogImage1, blogImage1, blogImage3];

const RightSideContent = () => {
  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);
  const {language} = useLanguage();
  return (
    <React.Fragment>
      {isGallery ? (
        <Lightbox
          open={isGallery}
          close={() => setisGallery(false)}
          index={photoIndex}
          slides={images.map((image) => ({ src: image }))}
        />
      ) : null}
      <Col lg={8}>
        <Card className="candidate-details ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4 candidate-personal-detail">
            <div>
              <h6 className="fs-17 fw-semibold mb-3">{language === 'pt' ? "Sobre Mim" : "About Us"}</h6>
              <p className="text-muted mb-2">
                Comunicação muito bem pensada e articulada. Marcos claros,
                prazos e trabalho rápido. Paciência. Paciência infinita. Sem
                atalhos. Mesmo que o cliente esteja sendo descuidado. Alguns
                exemplos rápidos de texto para construir o título do cartão e
                aumentar o conteúdo do cartão. Moltin oferece a plataforma.
              </p>
              <p className="text-muted mb-0">
                Como um especialista altamente qualificado e bem-sucedido em
                desenvolvimento de produtos e design, com mais de 4 anos de
                experiência, meu foco está em conceituar, projetar e modificar
                com sucesso produtos de consumo específicos para design de
                interiores e móveis para o lar.
              </p>
            </div>

            <div className="candidate-education-details mt-4 pt-3">
              <h6 className="fs-17 fw-bold mb-0">{language === 'pt' ? "Educação" : "Education"}</h6>
              <div className="candidate-education-content mt-4 d-flex">
                <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                  {" "}
                  B{" "}
                </div>
                <div className="ms-4">
                  <h6 className="fs-16 mb-1">
                    BCA - Bacharelado em Aplicações de Computador
                  </h6>
                  <p className="mb-2 text-muted">
                    Universidade Internacional - (2004 - 2010)
                  </p>
                  <p className="text-muted">
                    Existem muitas variações de passagens disponíveis, mas a
                    maioria altera alguma forma. Como um especialista altamente
                    qualificado e bem-sucedido em desenvolvimento de produtos e
                    design, com mais de 4 anos de experiência.
                  </p>
                </div>
              </div>

              <div className="candidate-education-content mt-4 d-flex">
                <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                  {" "}
                  M{" "}
                </div>
                <div className="ms-4">
                  <h6 className="fs-16 mb-1">
                    MCA - Mestrado em Aplicações de Computador
                  </h6>
                  <p className="mb-2 text-muted">
                    Universidade Internacional - (2010 - 2012)
                  </p>
                  <p className="text-muted">
                    Existem muitas variações de passagens disponíveis, mas a
                    maioria altera alguma forma. Como um especialista altamente
                    qualificado e bem-sucedido em desenvolvimento de produtos e
                    design, com mais de 4 anos de experiência.
                  </p>
                </div>
              </div>

              <div className="candidate-education-content mt-4 d-flex">
                <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                  {" "}
                  D{" "}
                </div>
                <div className="ms-4">
                  <h6 className="fs-16 mb-1">Comunicação Visual em Design</h6>
                  <p className="text-muted mb-2">
                    Universidade Internacional - (2012-2015)
                  </p>
                  <p className="text-muted">
                    Existem muitas variações de passagens disponíveis, mas a
                    maioria altera alguma forma. Como um especialista altamente
                    qualificado e bem-sucedido em desenvolvimento de produtos e
                    design, com mais de 4 anos de experiência.
                  </p>
                </div>
              </div>
            </div>
            <div className="candidate-education-details mt-4 pt-3">
              <h6 className="fs-17 fw-bold mb-0">{language === 'pt' ? "Experiência" : "Experience"}</h6>
              <div className="candidate-education-content mt-4 d-flex">
                <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                  {" "}
                  W{" "}
                </div>
                <div className="ms-4">
                  <h6 className="fs-16 mb-1">
                    Líder de Equipe de Design e Desenvolvimento Web
                  </h6>
                  <p className="mb-2 text-muted">
                    Agência Criativa - (2013 - 2016)
                  </p>
                  <p className="text-muted">
                    Existem muitas variações de passagens disponíveis, mas a
                    maioria altera alguma forma. Como um especialista altamente
                    qualificado e bem-sucedido em desenvolvimento de produtos e
                    design, com mais de 4 anos de experiência.
                  </p>
                </div>
              </div>

              <div className="candidate-education-content mt-4 d-flex">
                <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                  {" "}
                  P{" "}
                </div>
                <div className="ms-4">
                  <h6 className="fs-16 mb-1">Gerente de Projetos</h6>
                  <p className="mb-2 text-muted">
                    Recruitment Technology Pvt.Ltd - (Presente)
                  </p>
                  <p className="text-muted mb-0">
                    Existem muitas variações de passagens disponíveis, mas a
                    maioria altera alguma forma. Como um especialista altamente
                    qualificado e bem-sucedido em desenvolvimento de produtos e
                    design, com mais de 4 anos de experiência.
                  </p>
                </div>
              </div>
            </div>
            <div className="candidate-portfolio mt-4 pt-3">
              <h6 className="fs-17 fw-bold mb-0">{language === 'pt' ? "Projetos" : "Projects"}</h6>
              <Row>
                <Col lg={4} className="mt-4">
                  <div className="candidate-portfolio-box card border-0">
                    <Link to="#" className="image-popup">
                      <img
                        src={blogImage1}
                        onClick={() => {
                          setisGallery(true);
                          setphotoIndex(0);
                        }}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={4} className="mt-4">
                  <div className="candidate-portfolio-box card border-0">
                    <Link to="#" className="image-popup">
                      <img
                        src={blogImage2}
                        onClick={() => {
                          setisGallery(true);
                          setphotoIndex(1);
                        }}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                </Col>
                <Col lg={4} className="mt-4">
                  <div className="candidate-portfolio-box card border-0">
                    <Link to="#" className="image-popup">
                      <img
                        src={blogImage3}
                        onClick={() => {
                          setisGallery(true);
                          setphotoIndex(1);
                        }}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="mt-4 pt-3">
              <div className="d-sm-flex align-items-top">
                <div className="flex-shrink-0">
                  <img
                    className="rounded-circle avatar-md img-thumbnail"
                    src={userImage4}
                    alt="img"
                  />
                </div>
                <div className="flex-grow-1 ms-sm-3">
                  <div>
                    <p className="text-muted float-end fs-14 mb-2">
                      23 de jun, 2021
                    </p>
                    <h6 className="mt-sm-0 mt-3 mb-1">Michelle Durant</h6>
                    <div className="text-warning review-rating mb-2">
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star-half-full"></i>
                    </div>
                    <p className="text-muted fst-italic">
                      " Existem muitas variações de passagens de Lorem Ipsum
                      disponíveis, mas a maioria sofreu alterações de alguma
                      forma, por humor injetado "
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-sm-flex align-items-top mt-4">
                <div className="flex-shrink-0">
                  <img
                    className="rounded-circle avatar-md img-thumbnail"
                    src={userImage2}
                    alt="img"
                  />
                </div>
                <div className="flex-grow-1 ms-sm-3">
                  <div>
                    <p className="text-muted float-end fs-14 mb-2">
                      25 de jun, 2021
                    </p>
                    <h6 className="mt-sm-0 mt-3 mb-1">Jeffrey Montgomery</h6>
                    <div className="text-warning review-rating mb-2">
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star"></i>
                      <i className="mdi mdi-star-half-full"></i>
                      <i className="mdi mdi-star-outline"></i>
                    </div>
                    <p className="text-muted fst-italic">
                      " Existem muitas variações de passagens de Lorem Ipsum
                      disponíveis, mas a maioria sofreu alterações de alguma
                      forma, por humor injetado "
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form action="#" className="mt-4 pt-3">
              <h6 className="fs-17 fw-semibold mb-2">
                {language === 'pt' ? "Adicionar uma avaliação" : "Add a review" }
              </h6>
              <p className="text-muted mb-3">
                {language === 'pt' ? "Sua avaliação para esta listagem" : "Your rating for this listing"}
              </p>
              <Row>
                <Col lg={12}>
                  <div className="mb-3">
                    <label htmlFor="inputname" className="form-label">
                      {language === 'pt' ? "Seu Nome" : "Your Name"}
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="inputname"
                      placeholder={language === 'pt' ? "Digite seu nome" : "Enter your name"}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-3">
                    <label htmlFor="inputemail" className="form-label">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      className="form-control"
                      id="inputemail"
                      placeholder={language === 'pt' ? "Digite seu e-mail" : "Enter your e-mail"}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-3">
                    <label htmlFor="inputsubject" className="form-label">
                      {language === 'pt' ? "Assunto" : "Subject"}
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="inputsubject"
                      placeholder={language === 'pt' ? "Assunto" : "Subject"} 
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-3">
                    <label htmlFor="inputcoment" className="form-label">
                      {language === 'pt' ? "Avaliação" : "Evaluation"}
                    </label>
                    <textarea
                      className="form-control"
                      id="inputcoment"
                      rows="3"
                      placeholder={language === 'pt' ? "Adicione sua avaliação" : "Add your review"}
                    ></textarea>
                  </div>
                </Col>
              </Row>
              <div className="text-end">
                <button type="submit" className="btn btn-primary btn-hover">
                  {language === 'pt' ? "Enviar Avaliação" : "Send Review"} <i className="uil uil-angle-right-b"></i>
                </button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
