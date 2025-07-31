import React from "react";
import { Container } from "reactstrap";
import CompanyDetails from "./CompanyDetails";
import Section from "./Section";
import { useLanguage } from "../../../context/LanguageContext";

const CompanyList = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Lista de Empresas" : "Company List";

  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <CompanyDetails />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CompanyList;
