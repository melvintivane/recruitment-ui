import React from "react";
import Section from "../../Blog/Blog/Section";
import BlogContent from "../../Blog/Blog/BlogContent";
import { useLanguage } from "../../../context/LanguageContext";

const Blog = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Blog" : "Blog";

  return (
    <React.Fragment>
      <Section />
      <BlogContent />
    </React.Fragment>
  );
};

export default Blog;
