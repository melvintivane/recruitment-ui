import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Input, Label, Row } from "reactstrap";

const JobPostEdit = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-primary-subtle text-primary p-3">
                <h5 className="mb-0 fs-17">Publicar uma Nova Vaga!</h5>
              </div>
            </Col>
          </Row>
          <form action="#" className="job-post-form shadow mt-4">
            <div className="job-post-content box-shadow-md rounded-3 p-4">
              <Row className="row">
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobtitle" className="form-label">
                      Título da Vaga
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Título"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="jobdescription" className="form-label">
                      Descrição da Vaga
                    </Label>
                    <textarea
                      className="form-control"
                      id="jobdescription"
                      rows="3"
                      placeholder="Digite a descrição da vaga"
                    ></textarea>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="email" className="form-label">
                      Endereço de Email
                    </Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="phoneNumber" className="form-label">
                      Número de Telefone
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Telefone"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label
                      htmlFor="choices-single-categories"
                      className="form-label"
                    >
                      Categorias
                    </label>
                    <select
                      className="form-select"
                      name="choices-single-categories"
                      id="choices-single-categories"
                      aria-label="Selecione uma categoria"
                    >
                      <option value="ne">Digital e Criativo</option>
                      <option value="df">Varejo</option>
                      <option value="od">Gestão</option>
                      <option value="rd">Recursos Humanos</option>
                    </select>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="jobtype" className="form-label">
                      Tipo de Vaga
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtype"
                      placeholder="Tipo de vaga"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="designation" className="form-label">
                      Cargo
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="designation"
                      placeholder="Cargo"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="salary" className="form-label">
                      Salário ($)
                    </label>
                    <Input
                      type="number"
                      className="form-control"
                      id="salary"
                      placeholder="Salário"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="qualification" className="form-label">
                      Qualificação
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="qualification"
                      placeholder="Qualificação"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label htmlFor="skills" className="form-label">
                      Competências
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="skills"
                      placeholder="Competências necessárias"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <label htmlFor="lastdate" className="form-label">
                      Data Limite de Candidatura
                    </label>
                    <Input type="date" className="form-control" id="lastdate" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <label
                      htmlFor="choices-single-location"
                      className="form-label"
                    >
                      País
                    </label>
                    <select
                      className="form-select"
                      name="choices-single-location"
                      id="choices-single-location"
                      aria-label="Selecione o país"
                    >
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Marrocos</option>
                      <option value="MZ">Moçambique</option>
                    </select>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <label htmlFor="city" className="form-label">
                      Cidade
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Cidade"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <label htmlFor="zipcode" className="form-label">
                      Código Postal
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      id="zipcode"
                      placeholder="Código Postal"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="#" className="btn btn-success">
                      Voltar
                    </Link>
                    <Link to="#" className="btn btn-primary">
                      Publicar Agora <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobPostEdit;
