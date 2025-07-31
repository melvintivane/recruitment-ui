import React from "react";
import { Container, Row } from "reactstrap";
import Section from "../../Blog/BlogAuther/Section";
import LeftSideContent from "../../Blog/BlogAuther/LeftSideContent";
import RightSideContent from "../../Blog/BlogAuther/RightSideContent";
import { useLanguage } from "../../../context/LanguageContext";

const BlogAuther = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Autor do Blog" : "Blog Auther";

  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent />
            <RightSideContent />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogAuther;
