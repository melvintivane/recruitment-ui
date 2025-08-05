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
      </Row>
    </React.Fragment>
  );
};

export default Selected;
