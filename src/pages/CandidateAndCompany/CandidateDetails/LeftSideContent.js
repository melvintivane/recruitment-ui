import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

// Importar imagem do usuário
import userImage1 from "../../../assets/images/user/img-01.jpg";

const LeftSideContent = () => {
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="side-bar">
          <CardBody className="p-4">
            <div className="candidate-profile text-center">
              <img
                src={userImage1}
                alt=""
                className="avatar-lg rounded-circle"
              />
              <h6 className="fs-18 mb-0 mt-4">Gabriel Palmer</h6>
              <p className="text-muted mb-4">Designer Criativo</p>
              <ul className="candidate-detail-social-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-twitter-alt"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-link">
                    <i className="uil uil-phone-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </CardBody>

          <CardBody className="candidate-profile-overview border-top p-4">
            <h6 className="fs-17 fw-medium mb-3">Visão Geral do Perfil</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex">
                  <label className="text-dark">Categorias</label>
                  <div>
                    <p className="text-muted mb-0">Contabilidade / Finanças</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Salário</label>
                  <div>
                    <p className="text-muted mb-0">$450 por hora</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Idiomas</label>
                  <div>
                    <p className="text-muted mb-0">Inglês, Turco, Japonês</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Experiência</label>
                  <div>
                    <p className="text-muted mb-0">3 Anos</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Qualificação</label>
                  <div>
                    <p className="text-muted mb-0">Diploma de Associate</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex">
                  <label className="text-dark">Visualizações</label>
                  <div>
                    <p className="text-muted mb-0">2574</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-3">
              <Link to="#" className="btn btn-danger btn-hover w-100">
                <i className="uil uil-phone"></i> Contate-me
              </Link>
              <Link to="#" className="btn btn-primary btn-hover w-100 mt-2">
                <i className="uil uil-import"></i> Baixar CV
              </Link>
            </div>
            <ul className="list-inline d-flex justify-content-between align-items-center mb-0 mt-2">
              <li className="list-inline-item text-warning review-rating">
                <i className="mdi mdi-star"></i>
                <i className="mdi mdi-star"></i>
                <i className="mdi mdi-star"></i>
                <i className="mdi mdi-star"></i>
                <i className="mdi mdi-star-half-full"></i>
              </li>
              <li className="list-inline-item">
                <div className="favorite-icon">
                  <Link to="#">
                    <i className="uil uil-heart-alt fs-18"></i>
                  </Link>
                </div>
              </li>
            </ul>
          </CardBody>
          <CardBody className="p-4 border-top">
            <h6 className="fs-17 fw-medium mb-3">Habilidades Profissionais</h6>
            <div className="d-flex flex-wrap align-items-start gap-1">
              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                Design de Interface de Usuário
              </span>
              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                Design de Sites
              </span>
              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                Design Responsivo
              </span>
              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                Design de Aplicativos Móveis
              </span>
              <span className="badge bg-success-subtle text-success fs-13 mt-1">
                Design de UI
              </span>
            </div>
          </CardBody>
          <CardBody className="candidate-contact-details p-4 border-top">
            <h6 className="fs-17 fw-medium mb-3">Detalhes de Contato</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-primary-subtle text-primary flex-shrink-0">
                    <i className="uil uil-envelope-alt"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">Email</h6>
                    <p className="text-muted mb-0">gabrielpalmer@gmail.com</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-primary-subtle text-primary flex-shrink-0">
                    <i className="uil uil-map-marker"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">Endereço</h6>
                    <p className="text-muted mb-0">Matola, T3</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-primary-subtle text-primary flex-shrink-0">
                    <i className="uil uil-phone"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">Telefone</h6>
                    <p className="text-muted mb-0">+258 84 207 4393</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon bg-primary-subtle text-primary flex-shrink-0">
                    <i className="uil uil-skype-alt"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-1">Skype</h6>
                    <p className="text-muted mb-0">@gabrielpalmer</p>
                  </div>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
