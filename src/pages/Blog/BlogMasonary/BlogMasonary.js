import React from "react";
import Section from "../../Blog/BlogMasonary/Section";
import MasonaryContent from "../../Blog/BlogMasonary/MasonaryContent";

const BlogMasonary = () => {
  document.title =
    "Blog Masonary | Hireway - Job Listing | Mobitel";

  return (
    <React.Fragment>
      <Section />
      <MasonaryContent />
    </React.Fragment>
  );
};

export default BlogMasonary;
