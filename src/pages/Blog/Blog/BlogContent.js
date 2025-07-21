import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// Imagens dos usuários
import userImage1 from "../../../assets/images/user/img-01.jpg";
import userImage2 from "../../../assets/images/user/img-02.jpg";
import userImage3 from "../../../assets/images/user/img-03.jpg";

// Imagens do blog
import blogImage4 from "../../../assets/images/blog/img-04.jpg";
import blogImage5 from "../../../assets/images/blog/img-05.jpg";
import blogImage6 from "../../../assets/images/blog/img-06.jpg";
import blogImage7 from "../../../assets/images/blog/img-07.jpg";
import blogImage8 from "../../../assets/images/blog/img-08.jpg";
import blogImage9 from "../../../assets/images/blog/img-09.jpg";
import blogImage10 from "../../../assets/images/blog/img-10.jpg";

import { useLanguage } from "../../../context/LanguageContext";

const BlogContent = () => {
  const {language} = useLanguage();
  const blogContentText = [
    {
      id: 1,
      blogRow: [
        {
          id: 1,
          blogImage: blogImage6,
          blogTitle: "Moda",
          blogDate: "29 de Julho, 2021",
          blogHeading: "Um dia na vida de um designer de moda profissional",
          blogText:
            "Busque diversos catalisadores para mudanças em metas interoperáveis. Reprojetar de forma distinta meta-serviços revolucionários e arquiteturas premium. Incubar de forma intrínseca oportunidades intuitivas e potencialidades em tempo real. Comunicar adequadamente a tecnologia um a um.",
          blogAuthorImage: userImage2,
          blogAuthorName: "Rebecca Swartz",
          BlogAuthorPosition: "Designer de Moda",
        },
        {
          id: 2,
          blogImage: blogImage5,
          blogTitle: "Negócios",
          blogDate: "25 de Julho, 2021",
          blogHeading:
            "Designer de stack Olivia Murphy oferece conselhos sobre freelancing",
          blogText:
            "Busque diversos catalisadores para mudanças em metas interoperáveis. Reprojetar de forma distinta meta-serviços revolucionários e arquiteturas premium. Incubar de forma intrínseca oportunidades intuitivas e potencialidades em tempo real. Comunicar adequadamente a tecnologia um a um.",
          blogAuthorImage: userImage3,
          blogAuthorName: "Olivia Murphy",
          BlogAuthorPosition: "Líder de Produto",
        },
      ],
    },
    {
      id: 2,
      blogRow: [
        {
          id: 1,
          blogImage: blogImage7,
          blogTitle: "Negócios",
          blogDate: "25 de Julho, 2021",
          blogHeading:
            "Como gerenciar o espaço em branco em layouts responsivos?",
          blogText:
            "Busque diversos catalisadores para mudanças em metas interoperáveis. Reprojetar de forma distinta meta-serviços revolucionários e arquiteturas premium. Incubar de forma intrínseca oportunidades intuitivas e potencialidades em tempo real. Comunicar adequadamente a tecnologia um a um.",
          blogAuthorImage: userImage2,
          blogAuthorName: "Olivia Murphy",
          BlogAuthorPosition: "Líder de Produto",
        },
        {
          id: 2,
          blogImage: blogImage8,
          blogTitle: "Desenvolvimento",
          blogDate: "29 de Julho, 2021",
          blogHeading: "Como ser criativo no seu trabalho?",
          blogText:
            "Busque diversos catalisadores para mudanças em metas interoperáveis. Reprojetar de forma distinta meta-serviços revolucionários e arquiteturas premium. Incubar de forma intrínseca oportunidades intuitivas e potencialidades em tempo real. Comunicar adequadamente a tecnologia um a um.",
          blogAuthorImage: userImage3,
          blogAuthorName: "Rebecca Swartz",
          BlogAuthorPosition: "Designer de Moda",
        },
      ],
    },
    {
      id: 3,
      blogRow: [
        {
          id: 1,
          blogImage: blogImage9,
          blogTitle: "Negócios",
          blogDate: "25 de Julho, 2021",
          blogHeading: "O que o processo de planejamento precisa?",
          blogText:
            "Busque diversos catalisadores para mudanças em metas interoperáveis. Reprojetar de forma distinta meta-serviços revolucionários e arquiteturas premium. Incubar de forma intrínseca oportunidades intuitivas e potencialidades em tempo real. Comunicar adequadamente a tecnologia um a um.",
          blogAuthorImage: userImage3,
          blogAuthorName: "Olivia Murphy",
          BlogAuthorPosition: "Líder de Produto",
        },
        {
          id: 2,
          blogImage: blogImage10,
          blogTitle: "Desenvolvimento",
          blogDate: "29 de Julho, 2021",
          blogHeading:
            "Como se tornar o melhor vendedor de marketing em um ano!",
          blogText:
            "Busque diversos catalisadores para mudanças em metas interoperáveis. Reprojetar de forma distinta meta-serviços revolucionários e arquiteturas premium. Incubar de forma intrínseca oportunidades intuitivas e potencialidades em tempo real. Comunicar adequadamente a tecnologia um a um.",
          blogAuthorImage: userImage3,
          blogAuthorName: "Rebecca Swartz",
          BlogAuthorPosition: "Designer de Moda",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="mb-4">
                <h4>{language === 'pt' ? "Últimos & Posts de Blog em Alta" : "Latest & Trending Blog Posts"}</h4>
              </div>
            </Col>
            <Col lg={7}>
              <div className="post-preview overflow-hidden rounded-3 mb-3 mb-lg-0">
                <Link to="/blogdetails">
                  <img
                    src={blogImage4}
                    alt="Blog"
                    className="img-fluid blog-img"
                  />
                </Link>
              </div>
            </Col>
            <Col lg={5}>
              <article className="post position-relative">
                <div className="post ms-lg-4">
                  <p className="text-muted mb-2">
                    <b>Produto</b> - 01 de Agosto, 2021
                  </p>
                  <h5 className="mb-3">
                    <Link to="/blogdetails" className="primary-link">
                      As páginas de aterrissagem tradicionais funcionam para
                      startups de Saas?
                    </Link>
                  </h5>
                  <p className="text-muted">
                    Busque diversos catalisadores para mudanças em
                    metas interoperáveis. Reprojetar de forma distinta
                    meta-serviços revolucionários e arquiteturas premium.
                    Incubar de forma intrínseca oportunidades intuitivas e
                    potencialidades em tempo real. Comunicar adequadamente a
                    tecnologia um a um.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <div className="flex-shrink-0">
                      <img
                        src={userImage1}
                        alt=""
                        className="avatar-sm rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <Link to="/blogauther" className="primary-link">
                        <h6 className="fs-16 mb-0">James Lemire </h6>
                      </Link>
                      <p className="text-muted mb-0">Gerente de Produto</p>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
          </Row>

          <Col lg={12} className="mt-5">
            <div>
              <h4>{language === 'pt' ? "Todos os Posts de Blog" : "All Blog Posts"}</h4>
            </div>
          </Col>
          {blogContentText.map((blogContentDetails, key) => (
            <Row key={key}>
              {blogContentDetails.blogRow.map((blogContentInner, key) => (
                <Col lg={6} key={key}>
                  <article className="post position-relative mt-4" key={key}>
                    <div className="post-preview overflow-hidden mb-3 rounded-3">
                      <Link to="/blogdetails">
                        <img
                          src={blogContentInner.blogImage}
                          alt=""
                          className="img-fluid blog-img"
                        />
                      </Link>
                    </div>
                    <p className="text-muted mb-2">
                      <b>{blogContentInner.blogTitle}</b> -{" "}
                      {blogContentInner.blogDate}
                    </p>
                    <h5 className="mb-3">
                      <Link to="/blogdetails" className="primary-link">
                        {blogContentInner.blogHeading}
                      </Link>
                    </h5>
                    <p className="text-muted">{blogContentInner.blogText}</p>
                    <div className="d-flex align-items-center mt-4">
                      <div className="flex-shrink-0">
                        <img
                          src={blogContentInner.blogAuthorImage}
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <Link to="/blogauther" className="primary-link">
                          <h6 className="fs-16 mb-0">
                            {blogContentInner.blogAuthorName}
                          </h6>
                        </Link>
                        <p className="text-muted mb-0">
                          {blogContentInner.BlogAuthorPosition}
                        </p>
                      </div>
                    </div>
                  </article>
                </Col>
              ))}
            </Row>
          ))}

          <Row>
            <Col lg={12} className="mt-5">
              <nav aria-label="Exemplo de navegação de página">
                <ul className="pagination job-pagination mb-0 justify-content-center">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" tabIndex="-1">
                      <i className="mdi mdi-chevron-double-left fs-15"></i>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <i className="mdi mdi-chevron-double-right fs-15"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogContent;
