import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useLanguage } from "../../context/LanguageContext";
import { getAllJobCategories } from "../../services/jobCategorieService";

const Jobcatogaries = () => {

  const { language } = useLanguage();
     const [pagination, setPagination] = useState({
      page: 0,
      size: 8,
    });
  
    // Fetch vacancies query
    const { data, isLoading, error } = useQuery({
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


    const icons = ["uim-layers-alt","uim-airplay","uim-bag","uim-user-md","uim-hospital","uim-telegram-alt","uim-scenery","uim-file",]
    
 
   


   if (isLoading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div className="text-danger">Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3 className="title">{language === 'pt' ? "Categorias de Emprego" : "Job Categories"}</h3>
                <p className="text-muted">
                  {language === 'pt' ?
                    "Publique uma vaga para nos contar sobre o seu projeto. Iremos rapidamente conectá-lo  com os candidatos ideais."
                    : "Post a job to tell us about your project. We'll quickly connect you with the ideal candidates."
                  }
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            { data?.content?.map((item, key) => (
              <Col lg={3} md={6} className="pt-2 mt-4" key={key}>
                <div className="popu-category-box rounded text-center">
                  <div className="popu-category-icon icons-md">
                      <Icon  icon={icons[key]} className="text-primary" />  
                  </div>
                  <div className="popu-category-content mt-4">
                    <Link to="/joblist" className="text-dark stretched-link">
                      <h5 className="fs-18">{item.name}</h5>
                    </Link>
                    <p className="text-muted mb-0">{item.jobs || 0} {language === 'pt' ? "Vagas" : "Vancancies"}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12}>
              <div className="mt-5 text-center">
                <Link
                  to="/jobscategories"
                  className="btn btn-primary btn-hover"
                >
                  {language === 'pt' ? "Ver Todas as Categorias" : "See All Categories"} <i className="uil uil-arrow-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Jobcatogaries;
