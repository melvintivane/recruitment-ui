import React, { useState } from "react";
import {
  Col,
  Row,
  Nav,
  NavLink,
  TabContent,
  TabPane,
  Card,
  Input,
  Form,
  NavItem,
  CardBody,
  Label,
} from "reactstrap";

import classnames from "classnames";

//Images Import
import userImage2 from "../../../assets/images/user/img-02.jpg";
import { Link } from "react-router-dom";

const RightSideContent = () => {
  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <Col lg={8}>
        <Card className="profile-content-page mt-4 mt-lg-0">
          <Nav
            className="profile-content-nav nav-pills border-bottom mb-4"
            id="pills-tab"
            role="tablist"
          >
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  tabChange("1");
                }}
                type="button"
              >
                Visão geral
              </NavLink>
            </NavItem>
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  tabChange("2");
                }}
                type="button"
              >
                Editar Perfil
              </NavLink>
            </NavItem>
          </Nav>

          <CardBody className="p-4">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div>
                  <h5 className="fs-18 fw-bold">Sobre Mim</h5>
                  <p className="text-muted mt-4">
                    Desenvolvedor com mais de 5 anos de experiência trabalhando
                    nos setores público e privado. Diplomático, sociável e
                    habilidoso em lidar com situações sensíveis. Altamente
                    organizado, autodidata e proficiente com computadores.
                    Buscando aumentar as pontuações de satisfação dos alunos da{" "}
                    <b>Universidade Internacional</b>. Bacharelado em
                    comunicação.
                  </p>
                  <p className="text-muted">
                    Descreve a experiência relevante, habilidades e conquistas
                    do candidato. O objetivo deste resumo de carreira é explicar
                    suas qualificações para o trabalho em 3-5 frases e convencer
                    o gerente a ler o documento completo do currículo.
                  </p>
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Educação</h6>
                  <div className="candidate-education-content mt-4 d-flex">
                    <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                      B
                    </div>
                    <div className="ms-4">
                      <h6 className="fs-16 mb-1">
                        BCA - Bacharelado em Aplicações de Computador
                      </h6>
                      <p className="mb-2 text-muted">
                        Universidade Internacional - (2004 - 2010)
                      </p>
                      <p className="text-muted">
                        Existem muitas variações de trechos disponíveis, mas a
                        maioria das alterações em algum formato. Como um
                        especialista altamente qualificado e bem-sucedido em
                        desenvolvimento de produtos e design com mais de 4 anos
                        de experiência.
                      </p>
                    </div>
                  </div>
                  <div className="candidate-education-content mt-3 d-flex">
                    <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                      M
                    </div>
                    <div className="ms-4">
                      <h6 className="fs-16 mb-1">
                        MCA - Mestrado em Aplicações de Computador
                      </h6>
                      <p className="mb-2 text-muted">
                        Universidade Internacional - (2010 - 2012)
                      </p>
                      <p className="text-muted">
                        Existem muitas variações de trechos disponíveis, mas a
                        maioria das alterações em algum formato. Como um
                        especialista altamente qualificado e bem-sucedido em
                        desenvolvimento de produtos e design com mais de 4 anos
                        de experiência.
                      </p>
                    </div>
                  </div>
                  <div className="candidate-education-content mt-3 d-flex">
                    <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                      D
                    </div>
                    <div className="ms-4">
                      <h6 className="fs-16 mb-1">
                        Design de Comunicação Visual
                      </h6>
                      <p className="text-muted mb-2">
                        Universidade Internacional - (2012-2015)
                      </p>
                      <p className="text-muted">
                        Existem muitas variações de trechos disponíveis, mas a
                        maioria das alterações em algum formato. Como um
                        especialista altamente qualificado e bem-sucedido em
                        desenvolvimento de produtos e design com mais de 4 anos
                        de experiência.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Experiência</h6>
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
                        Existem muitas variações de trechos disponíveis, mas a
                        maioria das alterações em algum formato. Como um
                        especialista altamente qualificado e bem-sucedido em
                        desenvolvimento de produtos e design com mais de 4 anos
                        de experiência.
                      </p>
                    </div>
                  </div>
                  <div className="candidate-education-content mt-4 d-flex">
                    <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                      {" "}
                      G{" "}
                    </div>
                    <div className="ms-4">
                      <h6 className="fs-16 mb-1">Gerente de Projetos</h6>
                      <p className="mb-2 text-muted">
                        Recruitment Technology Pvt.Ltd - (Presente)
                      </p>
                      <p className="text-muted mb-0">
                        Existem muitas variações de trechos disponíveis, mas a
                        maioria das alterações em algum formato. Como um
                        especialista altamente qualificado e bem-sucedido em
                        desenvolvimento de produtos e design com mais de 4 anos
                        de experiência.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Habilidades</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    Gerenciamento de Nuvem
                  </span>
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    Design Responsivo
                  </span>
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    Arquitetura de Rede
                  </span>
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    PHP
                  </span>
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    Bootstrap
                  </span>
                  <span className="badge fs-13 bg-blue-subtle text-blue mt-2">
                    Designer UI & UX
                  </span>
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Idiomas falados</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  <span className="badge fs-13 bg-success-subtle text-success mt-2">
                    Inglês
                  </span>
                  <span className="badge fs-13 bg-success-subtle text-success mt-2">
                    Alemão
                  </span>
                  <span className="badge fs-13 bg-success-subtle text-success mt-2">
                    Francês
                  </span>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <Form action="#">
                  <div>
                    <h5 className="fs-17 fw-semibold mb-3 mb-0">Minha Conta</h5>
                    <div className="text-center">
                      <div className="mb-4 profile-user">
                        <img
                          src={userImage2}
                          className="rounded-circle img-thumbnail profile-img"
                          id="profile-img"
                          alt=""
                        />
                        <div className="p-0 rounded-circle profile-photo-edit">
                          <Input
                            id="profile-img-file-input"
                            type="file"
                            className="profile-img-file-input"
                          />
                          <Label
                            htmlFor="profile-img-file-input"
                            className="profile-photo-edit avatar-xs"
                          >
                            <i className="uil uil-edit"></i>
                          </Label>
                        </div>
                      </div>
                    </div>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <label htmlFor="firstName" className="form-label">
                            Nome
                          </label>
                          <Input
                            type="text"
                            className="form-control"
                            id="firstName"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="lastName" className="form-label">
                            Apelido
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="lastName"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <label
                            htmlFor="choices-single-categories"
                            className="form-label"
                          >
                            Tipo de Conta
                          </label>
                          <select
                            className="form-select"
                            data-trigger
                            name="choices-single-categories"
                            id="choices-single-categories"
                            aria-label="Exemplo de seleção padrão"
                          >
                            <option value="4">Contabilidade</option>
                            <option value="1">TI & Software</option>
                            <option value="3">Marketing</option>
                            <option value="5">Bancário</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Perfil</h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            Apresente-se
                          </Label>
                          <textarea className="form-control" rows="5">
                            Desenvolvedor com mais de 5 anos de experiência
                            trabalhando tanto no setor público quanto no
                            privado. Diplomático, sociável e habilidoso na
                            gestão de situações sensíveis. Altamente organizado,
                            automotivado e proficiente em informática. Buscando
                            aumentar as pontuações de satisfação dos alunos da
                            Universidade Internacional. Graduação em
                            Comunicação.
                          </textarea>
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="languages" className="form-label">
                            Linguas
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="languages"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <label
                            htmlFor="choices-single-location"
                            className="form-label"
                          >
                            Localização
                          </label>
                          <select
                            className="form-select"
                            data-trigger
                            name="choices-single-location"
                            id="choices-single-location"
                            aria-label="Default select example"
                          >
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label htmlFor="attachmentscv" className="form-label">
                            Anexar CV
                          </Label>
                          <Input
                            className="form-control"
                            type="file"
                            id="attachmentscv"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Redes Sociais</h5>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="facebook" className="form-label">
                            Facebook
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="facebook"
                            to="https://www.facebook.com"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="twitter" className="form-label">
                            Twitter
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="twitter"
                            to="https://www.twitter.com"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="linkedin" className="form-label">
                            Linkedin
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="linkedin"
                            to="https://www.linkedin.com"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="whatsapp" className="form-label">
                            Whatsapp
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="whatsapp"
                            to="https://www.whatsapp.com"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3 mb-3">
                      Alterar Senha
                    </h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label
                            htmlFor="current-password-input"
                            className="form-label"
                          >
                            Senha atual
                          </Label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder="Digite a senha atual"
                            id="current-password-input"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label
                            htmlFor="new-password-input"
                            className="form-label"
                          >
                            Nova senha
                          </Label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder="Digite a nova senha"
                            id="new-password-input"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label
                            htmlFor="confirm-password-input"
                            className="form-label"
                          >
                            Confirmar senha
                          </Label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder="Confirme a nova senha"
                            id="confirm-password-input"
                          />
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="verification"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="verification"
                          >
                            Ativar verificação em duas etapas por e-mail
                          </Label>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="mt-4 text-end">
                    <Link to="#" className="btn btn-primary">
                      Atualizar
                    </Link>
                  </div>
                </Form>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
