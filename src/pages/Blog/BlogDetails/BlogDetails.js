import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Archives from "../../../components/Archives";
import BlogCategory from "../../../components/BlogCategory";
import PopularPost from "../../../components/PopularPost";
import SocialConnect from "../../../components/SocialConnect";
import Tags from "../../../components/Tags";
import TextWidget from "../../../components/TextWidget";
import { getAllBlogCategories, getBlogById } from "../../../services/blogService";
import BlogColumn from "../BlogDetails/BlogColumn";
import BlogComments from "../BlogDetails/BlogComments";
import BlogForm from "../BlogDetails/BlogForm";
import BlogPost from "../BlogDetails/BlogPost";
import BlogSwiper from "../BlogDetails/BlogSwiper";
import BlogTitle from "../BlogDetails/BlogTitle";
import Section from "../BlogDetails/Section";

const BlogDetails = () => {
  document.title = "Blog Details | Recruitment - Job Listing | MobiSolutions";
  const { id } = useParams();
  
    const {
      data: blog,
      isLoading,
      isError,
      error,
    } = useQuery({
      queryKey: ["jobDetails", id],
      queryFn: () => getBlogById(id),
      staleTime: 60 * 1000,
      retry: 1,
    });

   
  
    if (isLoading) {
      return (
        <section className="section">
          <Section />
          <Container>
            <div className="text-center py-5">
              <div
                className="spinner-grow text-primary"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Carregando...</span>
              </div>
              <p className="mt-3">Carregando detalhes do blog...</p>
            </div>
          </Container>
        </section>
      );
    }
  
    if (isError) {
      return (
        <>
          <Section />
          <section className="section">
            <Container>
              <div className="text-center py-5 text-danger">
                Error: {error.message || "Failed to fetch blog details"}
              </div>
            </Container>
          </section>
        </>
      );
    }
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <BlogTitle data={blog} />
          <Row>
            <Col lg={8}>
              <div className="blog-post">
                <BlogSwiper />
                <BlogColumn data={blog}/>
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
