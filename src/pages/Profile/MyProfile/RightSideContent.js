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

const RightSideContent = ({ data }) => {
  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Presente";
    const date = new Date(dateString);
    return date.getFullYear();
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
                {data.professinalSummary && (
                  <div>
                    <h5 className="fs-18 fw-bold">Sobre Mim</h5>
                    <p className="text-muted mt-4">{data.professinalSummary}</p>
                  </div>
                )}
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Educação</h6>
                  {data.educations?.map((education, index) => (
                    <div
                      className="candidate-education-content mt-4 d-flex"
                      key={index}
                    >
                      <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                        {education.course?.charAt(0).toUpperCase()}
                      </div>

                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">
                          {education.course} - {education.institution}
                        </h6>

                        <p className="mb-2 text-muted">
                          {education.location} •{" "}
                          {formatDate(education.startDate)} -{" "}
                          {formatDate(education.endDate)}
                        </p>

                        {education.description && (
                          <p className="text-muted">{education.description}</p>
                        )}

                        {education.degree &&
                          education.degree !== education.course && (
                            <p className="text-muted small mt-1">
                              <strong>Grau:</strong> {education.degree}
                            </p>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">
                    Experiência Profissional
                  </h6>
                  {data.experiences?.map((experience, index) => (
                    <div
                      className="candidate-education-content mt-4 d-flex"
                      key={index}
                    >
                      <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                        {experience.position?.charAt(0).toUpperCase()}
                      </div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">{experience.position}</h6>
                        <p className="mb-2 text-muted">
                          {experience.company} • {experience.location} • (
                          {new Date(experience.startDate).getFullYear()} -{" "}
                          {experience.endDate
                            ? new Date(experience.endDate).getFullYear()
                            : "Atual"}
                          )
                        </p>
                        {experience.duties && (
                          <div className="text-muted">
                            <h6 className="fs-14 mb-1">
                              Principais atividades:
                            </h6>
                            <p className="mb-0">{experience.duties}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Cursos e Certificações</h6>
                  {data.trainings?.map((training, index) => (
                    <div
                      className="candidate-education-content mt-4 d-flex"
                      key={index}
                    >
                      <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                        {training.course?.charAt(0).toUpperCase()}
                      </div>
                      <div className="ms-4">
                        <h6 className="fs-16 mb-1">{training.course}</h6>
                        <p className="mb-2 text-muted">
                          {training.institution} • {training.location} • (
                          {new Date(training.startDate).toLocaleDateString(
                            "pt-BR",
                            { month: "short", year: "numeric" }
                          )}{" "}
                          -{" "}
                          {training.endDate
                            ? new Date(training.endDate).toLocaleDateString(
                                "pt-BR",
                                { month: "short", year: "numeric" }
                              )
                            : "Atual"}
                          )
                        </p>
                        {training.description && (
                          <p className="text-muted mb-0">
                            <strong>Conteúdo:</strong> {training.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Habilidades</h5>
                  <ul className="job-detail-list list-unstyled mb-0 text-muted">
                    {data.skills?.map((skill, index) => (
                      <li key={index}>
                        <i className="uil uil-circle"></i> {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Idiomas falados</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  {data.languages?.map((language, index) => (
                    <span
                      className="badge fs-13 bg-success-subtle text-success mt-2"
                      key={index}
                    >
                      {language.name}
                    </span>
                  ))}
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
                            defaultValue={data.firstName || ""}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="lastName" className="form-label">
                            Sobrenome
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="lastName"
                            defaultValue={data.lastName || ""}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            type="email"
                            className="form-control"
                            id="email"
                            defaultValue={data.email || ""}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="phone" className="form-label">
                            Telefone
                          </Label>
                          <Input
                            type="tel"
                            className="form-control"
                            id="phone"
                            defaultValue={data.phone || ""}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">
                      Perfil Profissional
                    </h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label
                            htmlFor="professionalSummary"
                            className="form-label"
                          >
                            Resumo Profissional
                          </Label>
                          <textarea
                            className="form-control"
                            rows="5"
                            id="professionalSummary"
                            defaultValue={data.professinalSummary || ""}
                          />
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

                      <Col lg={6}>
                        <div className="mb-3">
                          <label htmlFor="location" className="form-label">
                            Localização
                          </label>
                          <Input
                            type="text"
                            className="form-control"
                            id="location"
                            defaultValue={data.location || ""}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Educação</h5>
                    {data.educations?.map((education, index) => (
                      <div key={index} className="mb-4 p-3 border rounded">
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-course-${index}`}
                                className="form-label"
                              >
                                Curso
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`education-course-${index}`}
                                defaultValue={education.course || ""}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-institution-${index}`}
                                className="form-label"
                              >
                                Instituição
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`education-institution-${index}`}
                                defaultValue={education.institution || ""}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-startDate-${index}`}
                                className="form-label"
                              >
                                Data de Início
                              </Label>
                              <Input
                                type="date"
                                className="form-control"
                                id={`education-startDate-${index}`}
                                defaultValue={education.startDate || ""}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-endDate-${index}`}
                                className="form-label"
                              >
                                Data de Término
                              </Label>
                              <Input
                                type="date"
                                className="form-control"
                                id={`education-endDate-${index}`}
                                defaultValue={education.endDate || ""}
                              />
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`education-description-${index}`}
                                className="form-label"
                              >
                                Descrição
                              </Label>
                              <textarea
                                className="form-control"
                                id={`education-description-${index}`}
                                defaultValue={education.description || ""}
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                    <button type="button" className="btn btn-outline-primary">
                      + Adicionar Educação
                    </button>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">
                      Experiência Profissional
                    </h5>
                    {data.experiences?.map((experience, index) => (
                      <div key={index} className="mb-4 p-3 border rounded">
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-position-${index}`}
                                className="form-label"
                              >
                                Cargo
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`experience-position-${index}`}
                                defaultValue={experience.position || ""}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-company-${index}`}
                                className="form-label"
                              >
                                Empresa
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id={`experience-company-${index}`}
                                defaultValue={experience.company || ""}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-startDate-${index}`}
                                className="form-label"
                              >
                                Data de Início
                              </Label>
                              <Input
                                type="date"
                                className="form-control"
                                id={`experience-startDate-${index}`}
                                defaultValue={experience.startDate || ""}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-endDate-${index}`}
                                className="form-label"
                              >
                                Data de Término
                              </Label>
                              <Input
                                type="date"
                                className="form-control"
                                id={`experience-endDate-${index}`}
                                defaultValue={experience.endDate || ""}
                              />
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="mb-3">
                              <Label
                                htmlFor={`experience-duties-${index}`}
                                className="form-label"
                              >
                                Principais Atividades
                              </Label>
                              <textarea
                                className="form-control"
                                id={`experience-duties-${index}`}
                                defaultValue={experience.duties || ""}
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                    <button type="button" className="btn btn-outline-primary">
                      + Adicionar Experiência
                    </button>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Habilidades</h5>
                    <div className="mb-3">
                      <Label htmlFor="skills" className="form-label">
                        Suas Habilidades (separadas por vírgula)
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="skills"
                        defaultValue={
                          data.skills?.map((skill) => skill.name).join(", ") ||
                          ""
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Idiomas</h5>
                    <div className="mb-3">
                      <Label htmlFor="languages" className="form-label">
                        Idiomas que você fala (separados por vírgula)
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="languages"
                        defaultValue={
                          data.languages?.map((lang) => lang.name).join(", ") ||
                          ""
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-end">
                    <button type="submit" className="btn btn-primary">
                      Atualizar Perfil
                    </button>
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
