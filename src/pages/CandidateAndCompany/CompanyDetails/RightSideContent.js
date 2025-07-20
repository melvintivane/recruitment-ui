import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Imagens do Blog
import blogImage1 from "../../../assets/images/blog/img-01.jpg";
import blogImage3 from "../../../assets/images/blog/img-03.jpg";
import blogImage12 from "../../../assets/images/blog/img-12.jpg";

// Imagens de Vagas de Trabalho
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";

import { useLanguage } from "../../../context/LanguageContext";

const images = [blogImage1, blogImage3, blogImage12];

const RightSideContent = () => {
  // Modal de Inscrição
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const {language} = useLanguage();

  // Lightbox
  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);

  const jobVacancyPost = [
    {
      id: 1,
      companyImg: jobImage1,
      jobDescription: "Desenvolvedor HTML",
      experience: "0-2 Anos de Experiência",
      companyName: "Recruitment Technology Pvt.Ltd",
      location: "Califórnia",
      salary: "$250 - $800 / mês",
      fullTime: true,
      timing: "Tempo Integral",
      addclassNameBookmark: true,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-warning-subtle text-warning",
          badgeName: "Urgente",
        },
        {
          id: 2,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Privado",
        },
      ],
    },
    {
      id: 2,
      companyImg: jobImage2,
      jobDescription: "Diretor de Marketing",
      experience: "2-4 Anos de Experiência",
      companyName: "Creative Agency",
      location: "Nova York",
      salary: "$250 - $800 / mês",
      partTime: true,
      timing: "Tempo Integral",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Privado",
        },
      ],
    },
    {
      id: 3,
      companyImg: jobImage3,
      jobDescription: "Desenvolvedor HTML",
      experience: "2-4 Anos de Experiência",
      companyName: "Recruitment Technology Pvt.Ltd",
      location: "Califórnia",
      salary: "$250 - $800 / mês",
      freeLance: true,
      timing: "Freelance",
      addclassNameBookmark: true,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-blue-subtle text-blue",
          badgeName: "Estágio",
        },
      ],
    },
    {
      id: 4,
      companyImg: jobImage4,
      jobDescription: "Desenvolvedor Java",
      experience: "0-2 Anos de Experiência",
      companyName: "Recruitment Technology Pvt.Ltd",
      location: "Califórnia",
      salary: "$450 - $800 / mês",
      freeLance: true,
      timing: "Freelance",
      addclassNameBookmark: false,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-blue-subtle text-blue",
          badgeName: "Estágio",
        },
      ],
    },
  ];

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
        <Card className="ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4">
            <div className="mb-5">
              <h6 className="fs-17 fw-medium mb-4">{language === 'pt' ? "Sobre a Empresa" : "About the Company"}</h6>
              <p className="text-muted">
                Objetivamente perseguir diversos catalisadores para mudança para
                serviços meta-interoperáveis. Reengenheirar distintamente
                serviços meta-revolucionários e arquiteturas premium. Incubar
                intuitivamente oportunidades e potencialidades em tempo real.
                Comunicar adequadamente a tecnologia de forma personalizada.
              </p>

              <p className="text-muted">
                Incubar intuitivamente oportunidades e potencialidades em tempo
                real. Comunicar adequadamente a tecnologia de forma
                personalizada.
              </p>

              <p className="text-muted">
                Exercício de estúdio fotográfico, bolsa de lona stumptown
                Banksy, elit pequeno lote freegan sed. Cerveja artesanal elit
                seitan exercício, estúdio fotográfico e chips kale 8-bit
                proident chillwave deep v. Aliquip veniam delectus, Marfa
                eiusmod Pinterest em do umami readymade swag.
              </p>
            </div>
            <div className="candidate-portfolio mb-5">
              <h6 className="fs-17 fw-medium mb-4">Galeria</h6>
              <Row className="g-3">
                <Col lg={6}>
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
                </Col>
                <Col lg={6}>
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
                </Col>
                <Col lg={12}>
                  <Link to="#" className="image-popup">
                    <img
                      src={blogImage12}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(2);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
              </Row>
            </div>

            <div>
              <h6 className="fs-17 fw-medium mb-4">{language === 'pt' ? "Vagas Abertas" : "Open Vacancies"}</h6>

              {jobVacancyPost.map((jobVacancyPostDetails, key) => (
                <div
                  key={key}
                  className={
                    jobVacancyPostDetails.addclassNameBookmark === true
                      ? "job-box bookmark-post card mt-4"
                      : "job-box card mt-4"
                  }
                >
                  <div className="p-4">
                    <Row>
                      <Col lg={1}>
                        <Link to="/companydetails">
                          <img
                            src={jobVacancyPostDetails.companyImg}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </Link>
                      </Col>
                      <Col lg={10}>
                        <div className="mt-3 mt-lg-0">
                          <h5 className="fs-17 mb-1">
                            <Link to="/jobdetails" className="text-dark">
                              {jobVacancyPostDetails.jobDescription}
                            </Link>{" "}
                            <small className="text-muted fw-normal">
                              ({jobVacancyPostDetails.experience})
                            </small>
                          </h5>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <p className="text-muted fs-14 mb-0">
                                {jobVacancyPostDetails.companyName}
                              </p>
                            </li>
                            <li className="list-inline-item">
                              <p className="text-muted fs-14 mb-0">
                                <i className="mdi mdi-map-marker"></i>
                                {jobVacancyPostDetails.location}
                              </p>
                            </li>
                            <li className="list-inline-item">
                              <p className="text-muted fs-14 mb-0">
                                <i className="uil uil-wallet"></i>{" "}
                                {jobVacancyPostDetails.salary}
                              </p>
                            </li>
                          </ul>
                          <div className="mt-2">
                            <span
                              className={
                                jobVacancyPostDetails.fullTime === true
                                  ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                                  : jobVacancyPostDetails.partTime === true
                                  ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                                  : jobVacancyPostDetails.freeLance === true
                                  ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                                  : jobVacancyPostDetails.internship === true
                                  ? "badge bg-info-subtle text-info mt-1"
                                  : ""
                              }
                            >
                              {jobVacancyPostDetails.timing}
                            </span>
                            {(jobVacancyPostDetails.badges || []).map(
                              (badgeInner, key) => (
                                <span
                                  className={`badge ${badgeInner.badgeclassName} fs-13 mt-1`}
                                  key={key}
                                >
                                  {badgeInner.badgeName}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="favorite-icon">
                      <Link to="#">
                        <i className="uil uil-heart-alt fs-18"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="p-3 bg-light">
                    <div className="row justify-content-between">
                      <Col md={8}>
                        <div>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <i className="uil uil-tag"></i> {language === 'pt' ? "Palavras-chave" : "Keywords"} :
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="primary-link text-muted">
                                Designer de UI
                              </Link>
                              ,
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="primary-link text-muted">
                                Desenvolvedor
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Col>

                      <Col md={3}>
                        <div className="text-md-end">
                          <Link
                            to="#applyNow"
                            onClick={openModal}
                            className="primary-link"
                          >
                            {language === 'pt' ? "Inscreva-se" : "Sign Up"}{" "}
                            <i className="mdi mdi-chevron-double-right"></i>
                          </Link>
                        </div>
                      </Col>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="modal fade"
                id="applyNow"
                tabIndex="-1"
                aria-labelledby="applyNow"
                aria-hidden="true"
                isOpen={modal}
                toggle={openModal}
              >
                <div className="modal-dialog modal-lg">
                  <Modal isOpen={modal} toggle={openModal} centered>
                    <div className="modal-header">
                      <h5 className="modal-title" id="applyNow">
                        {language === 'pt' ? "Inscreva-se na vaga" : "Apply for the vacancy"}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={openModal}
                        aria-label="Close"
                      ></button>
                    </div>
                    <ModalBody className="modal-body p-5">
                      <form>
                        <div className="mb-3">
                          <Label for="nameControlInput">{language === 'pt' ? "Nome" : "Name"}</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="nameControlInput"
                            placeholder={language === 'pt' ? "Seu nome" : "Your name" }
                          />
                        </div>
                        <div className="mb-3">
                          <Label for="emailControlInput2">E-mail</Label>
                          <Input
                            type="email"
                            className="form-control"
                            id="emailControlInput2"
                            placeholder={language === 'pt' ? "Digite seu e-mail" : "Enter your e-mail"} 
                          />
                        </div>
                        <div className="mb-3">
                          <Label for="phoneNumber">{language === 'pt' ? "Telefone" : "Telephone"}</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="phoneNumber"
                            placeholder="Digite seu número"
                          />
                        </div>
                        <div className="mb-3">
                          <Label for="formFile" className="form-label">
                            {language === 'pt' ? "Enviar CV" : "Send CV"}
                          </Label>
                          <Input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                        <div className="mb-3">
                          <Label for="messageControlTextarea">{language === 'pt' ? "Mensagem" : "Message"}</Label>
                          <Input
                            as="textarea"
                            className="form-control"
                            id="messageControlTextarea"
                            rows="4"
                            placeholder={language === 'pt' ? "Digite sua mensagem" : "Enter your message"}
                          />
                        </div>
                        <div className="text-end">
                          <button type="submit" className="btn btn-primary">
                            {language === 'pt' ? "Enviar Inscrição" : "Submit Application"}
                          </button>
                        </div>
                      </form>
                    </ModalBody>
                  </Modal>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
