import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

//Importação de imagens do Blog
import BlogImage1 from "../../assets/images/blog/img-01.jpg";
import BlogImage2 from "../../assets/images/blog/img-02.jpg";
import BlogImage3 from "../../assets/images/blog/img-03.jpg";

const Blog = () => {
  const blog = [
    {
      id: 1,
      image: BlogImage1,
      userName: "Dirio Walls",
      date: "01 Julho, 2021",
      likesCount: "33",
      commnetCount: "08",
      blogTitle: "Como os aplicativos estão mudando o mundo da TI?",
      blogContent:
        "O texto final ainda não está disponível. Textos fictícios têm sido usados por diagramadores há séculos."
    },
    {
      id: 2,
      image: BlogImage2,
      userName: "Brandon Carney",
      date: "25 Junho, 2021",
      likesCount: 44,
      commnetCount: 25,
      blogTitle: "Os aplicativos mais inteligentes para negócios?",
      blogContent:
        "O texto final ainda não está disponível. Textos fictícios têm sido usados por diagramadores há séculos."
    },
    {
      id: 3,
      image: BlogImage3,
      userName: "William Mooneyhan",
      date: "16 Março, 2021",
      likesCount: 68,
      commnetCount: 20,
      blogTitle: "Como desenhar seus apps do seu jeito?",
      blogContent:
        "Uma desvantagem do Lorem Ipsum é que, em latim, certas letras aparecem com mais frequência do que outras."
    }
  ];

  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-5">
                <h3 className="title mb-3">Dicas Rápidas de Carreira</h3>
                <p className="text-muted">
                  Publique uma vaga e nos conte sobre o seu projeto. Vamos conectá-lo rapidamente com os freelancers ideais.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {(blog || []).map((blogDetails, key) => (
              <Col lg={4} md={6} key={key}>
                <div className="blog-box card p-2 mt-3">
                  <div className="blog-img position-relative overflow-hidden">
                    <img src={blogDetails.image} alt="" className="img-fluid" />
                    <div className="bg-overlay"></div>
                    <div className="author">
                      <p className="mb-0">
                        <i className="mdi mdi-account text-light"></i>
                        <Link to="#" className="text-light user">
                          {blogDetails.userName}
                        </Link>
                      </p>
                      <p className="text-light mb-0 date">
                        <i className="mdi mdi-calendar-check"></i>{" "}
                        {blogDetails.date}
                      </p>
                    </div>
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item">
                          <Link to="#" className="text-white">
                            <i className="mdi mdi-heart-outline me-1"></i>{" "}
                            {blogDetails.likesCount}
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#" className="text-white">
                            <i className="mdi mdi-comment-outline me-1"></i>{" "}
                            {blogDetails.commnetCount}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <Link to="/blogdetails" className="primary-link">
                      <h5 className="fs-17">{blogDetails.blogTitle}</h5>
                    </Link>
                    <p className="text-muted">{blogDetails.blogContent}</p>
                    <Link to="/blogdetails" className="form-text text-primary">
                      Leia mais{" "}
                      <i className="mdi mdi-chevron-right align-middle"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Blog;
