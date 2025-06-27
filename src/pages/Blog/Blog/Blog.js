import React from "react";
import Section from "../../Blog/Blog/Section";
import BlogContent from "../../Blog/Blog/BlogContent";

const Blog = () => {
  document.title = "Blog | Recruitment - Job Listing | MobiSolutions";

  return (
    <React.Fragment>
      <Section />
      <BlogContent />
    </React.Fragment>
  );
};

export default Blog;
