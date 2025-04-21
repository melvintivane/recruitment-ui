import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

//Import Images
import JobDetailImage from "../../../assets/images/job-detail.jpg";
import JobImage10 from "../../../assets/images/featured-job/img-10.png";
import { Link } from "react-router-dom";

const JobDetailsDescription = () => {
  return (
    <React.Fragment>
      <Card className="job-detail overflow-hidden">
        <div>
          <img src={JobDetailImage} alt="" className="img-fluid" />
          <div className="job-details-compnay-profile">
            <img
              src={JobImage10}
              alt=""
              className="img-fluid rounded-3 rounded-3"
            />
          </div>
        </div>
        <CardBody className="p-4">
          <div>
            <Row>
              <Col md={8}>
                <h5 className="mb-1">Designer de Produto / Designer de UI</h5>
                <ul className="list-inline text-muted mb-0">
                  <li className="list-inline-item">
                    <i className="mdi mdi-account"></i> 8 Vagas
                  </li>
                  <li className="list-inline-item text-warning review-rating">
                    <span className="badge bg-warning">4.8</span>{" "}
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star align-middle"></i>
                    <i className="mdi mdi-star-half-full align-middle"></i>
                  </li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="list-inline mb-0 text-lg-end mt-3 mt-lg-0">
                  <li className="list-inline-item">
                    <div className="favorite-icon">
                      <Link to="#">
                        <i className="uil uil-heart-alt"></i>
                      </Link>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="favorite-icon">
                      <Link to="#">
                        <i className="uil uil-setting"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          <div className="mt-4">
            <Row className="g-2">
              <Col lg={3}>
                <div className="border rounded-start p-3">
                  <p className="text-muted mb-0 fs-13">Experiência</p>
                  <p className="fw-medium fs-15 mb-0">Mínimo 1 Ano</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Tipo de Emprego</p>
                  <p className="fw-medium mb-0">Tempo Integral</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Posição</p>
                  <p className="fw-medium mb-0">Pleno</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border rounded-end p-3">
                  <p className="text-muted fs-13 mb-0">Salário Oferecido</p>
                  <p className="fw-medium mb-0">$55000 / Mês</p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Descrição da Vaga</h5>
            <div className="job-detail-desc">
              <p className="text-muted mb-0">
                Como Designer de Produto, você trabalhará dentro de uma Entrega
                de Produto Equipe fundida com talentos em UX, engenharia,
                produto e dados. Você ajudará a equipe a projetar belas
                interfaces que resolvem desafios de negócio para os nossos
                clientes. Trabalhamos com uma série de Bancos de nível 1 na
                criação de aplicações baseadas na Web para AML, KYC e Fluxos de
                trabalho de gerenciamento da Lista de Sanções. Este papel é
                ideal se você está à procura de seguir a sua carreira na FinTech
                ou Big Data arenas.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Responsabilidades</h5>
            <div className="job-detail-desc mt-2">
              <p className="text-muted">
                Como Designer de Produto, você trabalhará dentro de uma Entrega
                de Produto Equipe fundida com talentos em UX, engenharia,
                produto e dados.
              </p>
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
                <li>
                  <i className="uil uil-circle"></i> Ter bom conhecimento de
                  atividades comerciais.
                </li>
                <li>
                  <i className="uil uil-circle"></i> Construir aplicações web de
                  próxima geração com foco no lado do cliente.
                </li>
                <li>
                  <i className="uil uil-circle"></i> Trabalhar em vários
                  projetos ao mesmo tempo e cumprir prazos.
                </li>
                <li>
                  <i className="uil uil-circle"></i> Já ter se formado ou estar
                  cursando.
                </li>
                <li>
                  <i className="uil uil-circle"></i> Revisar o trabalho de
                  designers anteriores para manter a estética da marca.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Qualificações </h5>
            <div className="job-detail-desc mt-2">
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
                <li>
                  <i className="uil uil-circle"></i> B.C.A / M.C.A concluído em
                  universidade nacional.
                </li>
                <li>
                  <i className="uil uil-circle"></i> 3 ou mais anos de
                  experiência profissional em design.
                </li>
                <li>
                  <i className="uil uil-circle"></i> Já se formou ou está
                  estudando atualmente.
                </li>
                <li>
                  <i className="uil uil-circle"></i> Grau avançado ou
                  experiência equivalente em design gráfico e web.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Habilidades e Experiência</h5>
            <div className="job-details-desc">
              <ul className="job-detail-list list-unstyled mb-0 text-muted">
                <li>
                  <i className="uil uil-circle"></i> Compreensão dos principais
                  princípios de design.
                </li>
                <li>
                  <i className="uil uil-circle"></i> Proficiência em HTML, CSS,
                  Bootstrap.
                </li>
                <li>
                  <i className="uil uil-circle"></i> Wordpress: 1 ano
                  (Requerido)
                </li>
                <li>
                  <i className="uil uil-circle"></i> Experiência em design e
                  desenvolvimento de sites responsivos.
                </li>
                <li>
                  <i className="uil uil-circle"></i> Web design: 1 ano
                  (Preferencial)
                </li>
              </ul>
              <div className="mt-4 d-flex flex-wrap align-items-start gap-1">
                <span className="badge bg-primary">PHP</span>
                <span className="badge bg-primary">JS</span>
                <span className="badge bg-primary">Marketing</span>
                <span className="badge bg-primary">REACT</span>
                <span className="badge bg-primary">PHOTOSHOP</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mt-1">Compartilhar esta vaga:</li>
              <li className="list-inline-item mt-1">
                <Link to="#" className="btn btn-primary btn-hover">
                  <i className="uil uil-facebook-f"></i> Facebook
                </Link>
              </li>
              <li className="list-inline-item mt-1">
                <Link to="#" className="btn btn-danger btn-hover">
                  <i className="uil uil-google"></i> Google+
                </Link>
              </li>
              <li className="list-inline-item mt-1">
                <Link to="#" className="btn btn-success btn-hover">
                  <i className="uil uil-linkedin-alt"></i> linkedin
                </Link>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default JobDetailsDescription;
