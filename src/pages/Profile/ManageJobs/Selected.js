import React from "react";
import { Col, Row } from "reactstrap";

const Selected = () => {
  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col lg={8}>
          <div className="mb-4 mb-lg-0">
            <h6 className="mb-0"> Minhas Vagas Publicadas </h6>
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
                    <option value="df">Padrão</option>
                    <option value="ne">Mais Recentes</option>
                    <option value="od">Mais Antigas</option>
                    <option value="rd">Aleatório</option>
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
                    <option value="df">Todas</option>
                    <option value="2m">Últimos 2 Meses</option>
                    <option value="6m">Últimos 6 Meses</option>
                    <option value="12m">Últimos 12 Meses</option>
                    <option value="2y">Últimos 2 Anos</option>
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
