import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const footer = [
    {
      id: 1,
      title: "Empresa",
      menu: [
        { id: 1, link: "/about", subTitle: "Sobre Nós" },
        { id: 2, link: "/contact", subTitle: "Fale Conosco" },
        { id: 3, link: "/services", subTitle: "Serviços" },
        { id: 4, link: "/blog", subTitle: "Blog" },
        { id: 5, link: "/team", subTitle: "Equipe" },
        { id: 6, link: "/pricing", subTitle: "Preços" },
      ],
    },
    {
      id: 2,
      title: "Para Candidatos",
      menu: [
        { id: 1, link: "/jobscategories", subTitle: "Categorias de Vagas" },
        { id: 2, link: "/joblist", subTitle: "Listagem de Vagas" },
        { id: 4, link: "/bookmarkjobs", subTitle: "Vagas Salvas" },
      ],
    },
    {
      id: 3,
      title: "Para Recrutadores",
      menu: [
        { id: 1, link: "/candidatelist", subTitle: "Lista de Candidatos" },
        { id: 3, link: "/candidatedetails", subTitle: "Detalhes do Candidato" },
      ],
    },
    {
      id: 4,
      title: "Suporte",
      menu: [
        { id: 1, link: "/contact", subTitle: "Central de Ajuda" },
        { id: 2, link: "/faqs", subTitle: "Perguntas Frequentes" },
        {
          id: 3,
          link: "/privacyandpolicy",
          subTitle: "Política de Privacidade",
        },
      ],
    },
  ];
  const footerIcons = [
    {
      id: 1,
      socialIcon: "uil uil-facebook-f",
    },
    {
      id: 2,
      socialIcon: "uil uil-linkedin-alt",
    },
    {
      id: 3,
      socialIcon: "uil uil-google",
    },
    {
      id: 4,
      socialIcon: "uil uil-twitter",
    },
  ];
  return (
    <React.Fragment>
      <section className="bg-footer">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                <h4 className="text-white mb-4">Recruitment</h4>
                <p className="text-white-50">
                  É um fato estabelecido que um leitor se distrairá com o
                  conteúdo de uma página ao observar seu layout.
                </p>
                <p className="text-white mt-3">Siga-nos em:</p>
                <ul className="footer-social-menu list-inline mb-0">
                  {footerIcons.map((footerIcondetails, key) => (
                    <li className="list-inline-item" key={key}>
                      <Link to="#">
                        <i className={footerIcondetails.socialIcon}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            {footer.map((footerdetails, key) => (
              <Col lg={2} xs={6} key={key}>
                <div className="footer-item mt-4 mt-lg-0">
                  <p className="fs-16 text-white mb-4">{footerdetails.title}</p>
                  {(footerdetails.menu || []).map((menuInner, key) => (
                    <ul className="list-unstyled footer-list mb-0" key={key}>
                      <li>
                        <Link to={menuInner.link}>
                          <i className="mdi mdi-chevron-right ml-6"></i>{" "}
                          {menuInner.subTitle}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="text-white-50 text-center mb-0">
                {new Date().getFullYear()} &copy; Recruitment - Job Listing Page
                by{" "}
                <Link
                  to="//MobiSolutions.in/"
                  target="_blank"
                  className="text-reset text-decoration-underline"
                >
                  MyMobi Solutions
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
