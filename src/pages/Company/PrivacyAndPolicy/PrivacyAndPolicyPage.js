import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useLanguage } from "../../../context/LanguageContext";
import translatedData from "../../../translations/PrivacyAndPolicy";

const PrivacyAndPolicyPage = () => {
  const {language} = useLanguage();
  const t = translatedData[language] || translatedData['pt'];
  
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            {t.privacyandpolicyPage.map((privacyandpolicyDetails, key) => (
              <Col lg={12} key={key}>
                <h5 className="mb-4">{privacyandpolicyDetails.policyTitle}</h5>
                <ul className="about-list list-unstyled text-muted mb-4 pb-2">
                  {privacyandpolicyDetails.policyRules.map(
                    (privacyandpolicyInner, key) => (
                      <li key={key}>{privacyandpolicyInner.policyInnerRule}<b className="text-danger">{privacyandpolicyInner.bold}</b></li>
                    )
                  )}
                </ul>
              </Col>
            ))}
            <div className="text-end">
              <Link to="#" className="btn btn-primary">
                <i className="uil uil-print"></i> {language === 'pt' ? "Imprimir" : "Print"}
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PrivacyAndPolicyPage;
