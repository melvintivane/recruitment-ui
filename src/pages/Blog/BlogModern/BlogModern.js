import React from "react";
import Section from "../../Blog/BlogModern/Section";
import BlogModernContent from "../../Blog/BlogModern/BlogModernContent";

const BlogModern = () => {
  document.title = "Blog Modern | Hireway - Job Listing | Mobitel";
  return (
    <React.Fragment>
      <Section />
      <BlogModernContent />
    </React.Fragment>
  );
};

export default BlogModern;
