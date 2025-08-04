import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";
import { getAllJobCategories } from "../../../services/jobCategorieService";
import translatedData from "../../../translations/JobCategories";

const Categories = () => {
  const { language } = useLanguage();
  const t = translatedData[language] || translatedData["pt"];

  const [pagination, setPagination] = useState({
    page: 0,
    size: 20,
  });

  // Fetch vacancies query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories", pagination.page, pagination.size],
    queryFn: () =>
      getAllJobCategories({
        page: pagination.page,
        size: pagination.size,
        /*search: filters.searchQuery,
            location: filters.location,
            category: filters.jobCategoryId,
            yearsOfExperience: filters.experienceRange,
            jobType: filters.jobType,
            timePeriod: filters.timePeriod,*/
      }),
    keepPreviousData: true,
  });

  if (isLoading) {
    return (
      <>
        <section className="section">
          <Container>
            <div className="text-center py-5">
              <div
                className="spinner-grow text-primary"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">{language === "pt" ? "Carregando..." : "Loading..."}</span>
              </div>
              <p className="mt-3">{language === "pt" ? "Carregando lista de categorias..." : "Loading category list..."}</p>
            </div>
          </Container>
        </section>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <section className="section">
          <Container>
            <div className="text-center py-5">
              <p className="mt-3 text-danger">
                {language === "pt" ? "Erro ao carregar a lista de categorias" : "Error loading category list"}
              </p>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center mb-5">
                <p className="badge bg-warning fs-14 mb-2">
                  {language === "pt"
                    ? "Empregos Disponíveis Hoje"
                    : "Jobs Available Today"}
                </p>
                <h4>
                  {language === "pt"
                    ? "Procure Empregos por Categoria"
                    : "Browse Jobs by Category"}
                </h4>
                <p className="text-muted">
                  {language === "pt"
                    ? "Candidate-se às vagas que combinam com o seu perfil e dê o próximo passo na sua carreira profissional."
                    : "Apply to jobs that match your profile and take the next step in your professional career."}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {data?.content?.map((categorie, key) => (
              <Col lg={4} key={key}>
                <Card className="job-Categories-box bg-light border-0">
                  <CardBody className="p-4">
                    <ul className="list-unstyled job-Categories-list mb-0">
                      <li key={key}>
                        <Link to="/joblist" className="primary-link">
                          {categorie.name}{" "}
                          <span className="badge bg-info-subtle text-info float-end">
                            {categorie.jobNumbers || 0}
                          </span>
                        </Link>
                      </li>
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
