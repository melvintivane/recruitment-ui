import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Categories = () => {
  const categories = [
    {
      id: 1,
      jobCategories: [
        { id: 1, jobName: "Contabilidade e Finanças", jobNumbers: 25 },
        { id: 2, jobName: "Empregos Bancários", jobNumbers: 10 },
        { id: 3, jobName: "Entrada de Dados", jobNumbers: 71 },
        { id: 4, jobName: "Gestor de Compras", jobNumbers: 40 },
        { id: 5, jobName: "Gestor de Projetos", jobNumbers: 86 },
        { id: 6, jobName: "Educação e Formação", jobNumbers: 47 },
        { id: 7, jobName: "Marketing e Publicidade", jobNumbers: 47 },
        { id: 8, jobName: "Catering e Turismo", jobNumbers: 47 },
      ],
    },
    {
      id: 2,
      jobCategories: [
        { id: 1, jobName: "Empregos Governamentais", jobNumbers: 120 },
        { id: 2, jobName: "Empregos nas Forças de Defesa", jobNumbers: 73 },
        { id: 3, jobName: "Empregos na Educação", jobNumbers: 88 },
        { id: 4, jobName: "Varejo e Atendimento ao Cliente", jobNumbers: 10 },
        { id: 5, jobName: "Técnicos Profissionais", jobNumbers: 55 },
        { id: 6, jobName: "Cuidados de Saúde", jobNumbers: 99 },
        { id: 7, jobName: "Fabricação e Produção", jobNumbers: 27 },
        { id: 8, jobName: "Artes Performativas e Mídia", jobNumbers: 11 },
      ],
    },
    {
      id: 3,
      jobCategories: [
        { id: 1, jobName: "Tecnologia da Informação", jobNumbers: 175 },
        { id: 2, jobName: "Logística / Transportes", jobNumbers: 60 },
        { id: 3, jobName: "Desporto", jobNumbers: 42 },
        { id: 4, jobName: "Trabalhador Florestal", jobNumbers: 30 },
        { id: 5, jobName: "Cuidador de Animais", jobNumbers: 120 },
        { id: 6, jobName: "Marketing Digital", jobNumbers: 88 },
        { id: 7, jobName: "Assistente Administrativo", jobNumbers: 4 },
        { id: 8, jobName: "Serviços de Oficina Mecânica", jobNumbers: 75 },
      ],
    },
  ];

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center mb-5">
                <p className="badge bg-warning fs-14 mb-2">
                  Empregos Disponíveis Hoje
                </p>
                <h4>Procure Empregos por Categoria</h4>
                <p className="text-muted">
                  Publique uma vaga para nos contar sobre o seu projeto. Vamos
                  rapidamente conectá-lo com os freelancers ideais.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {categories.map((categoriesDetails, key) => (
              <Col lg={4} key={key}>
                <Card className="job-Categories-box bg-light border-0">
                  <CardBody className="p-4">
                    <ul className="list-unstyled job-Categories-list mb-0">
                      {(categoriesDetails.jobCategories || []).map(
                        (jobCategoriesDetails, key) => (
                          <li key={key}>
                            <Link to="/joblist" className="primary-link">
                              {jobCategoriesDetails.jobName}{" "}
                              <span className="badge bg-info-subtle text-info float-end">
                                {jobCategoriesDetails.jobNumbers}
                              </span>
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Categories;
