import React from "react";
import { Col, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";

const Selected = () => {
  const {language} = useLanguage();
  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col lg={8}>
          <div className="mb-4 mb-lg-0">
            <h6 className="mb-0"> {language === 'pt' ? "Minhas Vagas Publicadas" : "My Published Jobs"} </h6>
          </div>
        </Col>
        <Col lg={4}>
          <div className="candidate-list-widgets">
            <Row>
              <Col lg={6}>
                <div className="selection-widget">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-single-filter-orderby"
                    id="choices-single-filter-orderby"
                    aria-label="Exemplo de seleção padrão"
                  >
                    <option value="df">{language === 'pt' ? "Padrão" : "Default"}</option>
                    <option value="ne">{language === 'pt' ? "Mais recentes" : "Newest"}</option>
                    <option value="od">{language === 'pt' ? "Mais antigos" : "Oldest"}</option>
                    <option value="rd">{language === 'pt' ? "Aleatório" : "Random"}</option>
                  </select>
                </div>
              </Col>
              <Col lg={6}>
                <div className="selection-widget mt-2 mt-lg-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-candidate-page"
                    id="choices-candidate-page"
                    aria-label="Exemplo de seleção padrão"
                  >
                    <option value="df">{language === 'pt' ? "Todas" : "All"}</option>
                    <option value="2m">{language === 'pt' ? "Últimos 2 Meses" : "Last 2 Months"}</option>
                    <option value="6m">{language === 'pt' ? "Últimos 6 Meses" : "Last 6 Months"}</option>
                    <option value="12m">{language === 'pt' ? "Últimos 12 Meses" : "Last 12 Months"}</option>
                    <option value="2y">{language === 'pt' ? "Últimos 2 Anos" : "Last 2 Years"}</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Selected;
