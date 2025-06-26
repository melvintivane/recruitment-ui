import React from "react";
import { Container, Col, Row } from "reactstrap";
import Section from "../BlogDetails/Section";
import BlogTitle from "../BlogDetails/BlogTitle";
import BlogCategory from "../../../components/BlogCategory";
import PopularPost from "../../../components/PopularPost";
import TextWidget from "../../../components/TextWidget";
import Archives from "../../../components/Archives";
import Tags from "../../../components/Tags";
import SocialConnect from "../../../components/SocialConnect";
import BlogSwiper from "../BlogDetails/BlogSwiper";
import BlogColumn from "../BlogDetails/BlogColumn";
import BlogComments from "../BlogDetails/BlogComments";
import BlogForm from "../BlogDetails/BlogForm";
import BlogPost from "../BlogDetails/BlogPost";

const BlogDetails = () => {
  document.title = "Blog Details | Recruitment - Job Listing | Mobitel";

  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <BlogTitle />
          <Row>
            <Col lg={8}>
              <div className="blog-post">
                <BlogSwiper />
                <BlogColumn />
                <BlogComments />
                <BlogForm />
                <BlogPost />
              </div>
            </Col>
            <Col lg={4} md={5}>
              <div className="sidebar ms-lg-4 ps-lg-4 mt-5 mt-lg-0">
                <BlogCategory />
                <PopularPost />
                <TextWidget />
                <Archives />
                <Tags />
                <SocialConnect />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogDetails;
