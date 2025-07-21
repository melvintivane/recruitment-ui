import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";
import translatedData from "../../../translations/JobCategories";

const Categories = () => {
  const {language} = useLanguage();
  const t = translatedData[language] || translatedData['pt'];

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center mb-5">
                <p className="badge bg-warning fs-14 mb-2">
                  {language === 'pt' ? "Empregos Disponíveis Hoje" : "Jobs Available Today"}
                </p>
                <h4>{language === 'pt' ? "Procure Empregos por Categoria" : "Browse Jobs by Category"}</h4>
                <p className="text-muted">
                  {language === 'pt' ? "Publique uma vaga para nos contar sobre o seu projeto. Vamos rapidamente conectá-lo com os freelancers ideais." :
                  "Post a job to tell us about your project. We'll quickly connect you with the ideal freelancers."}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {t.categories.map((categoriesDetails, key) => (
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
